import { useState } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';

export function ImportCoingeckoDataAction({ id, onComplete, draft, published, type }) {
    //@ts-ignore
    const { patch } = useDocumentOperation(id, type);
    const [dialogOpen, setDialogOpen] = useState(false);

    const doc = draft || published;
    const coingeckoTokenId = doc?.coingeckoTokenId || null;

    return {
        label: 'Import coingecko data',
        onHandle: () => {
            setDialogOpen(true);
        },
        dialog: dialogOpen && {
            type: 'confirm',
            onCancel: onComplete,
            onConfirm: async () => {
                const url = `https://api.coingecko.com/api/v3/coins/${coingeckoTokenId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`;

                const response = await fetch(url);

                if (!response.ok) {
                    alert('An error occurred fetching coingecko data. Verify the provided id');
                    onComplete();

                    return;
                }

                const data = await response.json();

                patch.execute([
                    {
                        set: {
                            symbol: data.symbol?.toUpperCase() || undefined,
                            name: data.name || undefined,
                            description: data.description.en || undefined,
                            websiteUrl: data.links.homepage[0] || undefined,
                            discordUrl: data.links.chat_url.find((url) => url.indexOf('discord') !== -1) || undefined,
                            telegramUrl: data.links.chat_url.find((url) => url.indexOf('t.me') !== -1) || undefined,
                            twitterUsername: data.links.twitter_screen_name || undefined,
                            logoURI: data.image.large || undefined,
                        },
                    },
                ]);

                alert('Successfully imported coingecko data.');
                onComplete();
            },
            message:
                'Importing coingecko data will overwrite any currently stored values. The update may take a few seconds. Are you sure you want to continue?',
        },
    };
}
