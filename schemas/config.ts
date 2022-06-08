import { BsGear as icon } from 'react-icons/bs';

export const NETWORKS = [
    { title: 'Fantom', value: 250 },
    { title: 'Rinkeby', value: 4 },
    { title: 'Optimism', value: 10 },
];

export default {
    name: 'config',
    title: 'Config',
    type: 'document',
    icon,
    fields: [
        {
            name: 'chainId',
            title: 'Network',
            type: 'number',
            options: {
                list: NETWORKS,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'homeFeaturedPools',
            title: 'Home Featured Pools',
            description: 'Home featured pools will how on the home screen.',
            type: 'array',
            of: [{ type: 'configFeaturedPool' }],
        },
        {
            name: 'homeNewsItems',
            title: 'Home Latest Updates',
            description: 'News items that will show on the home screen.',
            type: 'array',
            of: [{ type: 'configNewsItem' }],
        },
        {
            name: 'homeEducationItems',
            title: 'Home Learning the Notes',
            description: 'DeFi learning articles that appear on the home screen.',
            type: 'array',
            of: [{ type: 'configNewsItem' }],
        },
        {
            name: 'incentivizedPools',
            title: 'Incentivized Pools',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'pausedPools',
            title: 'Paused Pools',
            description:
                'Any pool that has been paused for trading. The pool will have its name modified, but will still be visible on the UI.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'blacklistedPools',
            title: 'Blacklisted Pools',
            description: 'Blacklisted pools will not be used by the SOR and will also not show in the UI.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'excludedPools',
            title: 'Excluded Pools',
            description: 'TVL from excluded pools will not be used in overall TVL calculation.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'featuredPools',
            title: 'Featured Pools',
            description: 'Featured pools will show at the top of the invest screen.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'blacklistedTokens',
            title: 'Blacklisted Tokens',
            description:
                'Blacklisted tokens will not appear in the popular tokens and will also not appear by default in the token dropdown list.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'boostedPools',
            title: 'Boosted Pool Ids',
            description:
                'List of all known boosted pools. Until the SOR can handle balance updates properly, we need to prevent the same boosted pool being used twice in the same swap.',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'poolFilters',
            title: 'Pool Filters',
            description:
                'A custom pool filter for Beethoven X Pools, define a label and the pools associated with the filter.',
            type: 'array',
            of: [{ type: 'configPoolFilter' }],
        },
    ],
    preview: {
        select: {
            chainId: 'chainId',
        },
        prepare(selection) {
            const network = NETWORKS.find((network) => network.value === selection.chainId);
            return {
                title: `${network.title || ''} Config`,
            };
        },
    },
};

export const configFeaturedPool = {
    name: 'configFeaturedPool',
    type: 'object',
    fields: [
        {
            name: 'poolId',
            description: 'The on chain pool id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            description:
                'This title does not show on the website, it is just to make it easier to identify the pool in Sanity.',
            type: 'string',
        },
        {
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            type: 'text',
        },
    ],
};

export const configNewsItem = {
    name: 'configNewsItem',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'publishDate',
            description: 'The date this item was published',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
    ],
};

export const configPoolFilter = {
    name: 'configPoolFilter',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'pools',
            title: 'Pools',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required(),
        },
    ],
};
