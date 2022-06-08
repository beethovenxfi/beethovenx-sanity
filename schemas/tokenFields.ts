export const tokenFields = [
    {
        name: 'coingeckoTokenId',
        title: 'Coingecko Token ID',
        description:
            'This id is used to fetch data from coingecko. Most of the time it is the last segment of the coingecko url, ie: coingecko.com/en/coins/beethoven-x has an ID of beethoven-x. IMPORTANT: Once you\'ve entered an id, select "Import coingecko data" from the document actions to pre-populate a lot of the data.',
        type: 'string',
    },
    {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'address',
        title: 'Address',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'symbol',
        title: 'Symbol',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'decimals',
        title: 'Decimals',
        type: 'number',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'logoURI',
        title: 'Logo URL',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'priority',
        title: 'Priority',
        type: 'number',
        description:
            'Effects the order in which tokens appear in the token select list on the frontend. Higher priority appears first.',
    },
    {
        name: 'coingeckoPlatformId',
        title: 'Coingecko Platform Id',
        description: 'If the token is not a native token, provide the coingecko platform to fetch the price from',
        type: 'string',
    },
    {
        name: 'coingeckoContractAddress',
        title: 'Coingecko Contract Address',
        description:
            'If the token is not a native token, provide the coingecko contract address to fetch the price for',
        type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
    },
    {
        name: 'websiteUrl',
        title: 'Website URL',
        type: 'string',
    },
    {
        name: 'twitterUsername',
        title: 'Twitter Username',
        type: 'string',
    },
    {
        name: 'discordUrl',
        title: 'Discord URL',
        type: 'string',
    },
    {
        name: 'telegramUrl',
        title: 'Telegram URL',
        type: 'string',
    },
];
