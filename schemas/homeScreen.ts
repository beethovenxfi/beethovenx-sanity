import { BsHouse as icon } from 'react-icons/bs';
import { NETWORKS } from './config';

export const homeScreen = {
    name: 'homeScreen',
    title: 'Home screen (V2)',
    type: 'document',
    icon,
    fields: [
        {
            name: 'chainId',
            title: 'Network',
            type: 'number',
            options: { list: NETWORKS },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'featuredPoolGroups',
            title: 'Featured Pool Groups',
            type: 'array',
            of: [{ type: 'homeScreenFeaturedPoolGroup' }],
        },
        {
            name: 'newsItems',
            title: 'News items',
            type: 'array',
            of: [{ type: 'homeScreenNewsItem' }],
        },
    ],
    preview: {
        select: {
            chainId: 'chainId',
        },
        prepare(selection) {
            const network = NETWORKS.find((network) => network.value === selection.chainId);
            return {
                title: `${network.title || ''} Home Screen`,
            };
        },
    },
};

export const homeScreenFeaturedPoolGroup = {
    name: 'homeScreenFeaturedPoolGroup',
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
            name: 'icon',
            type: 'image',
            description: 'Icons should be square in size.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'homeScreenFeaturedPoolGroupPoolId' }, { type: 'homeScreenFeaturedPoolGroupExternalLink' }],
            validation: (Rule) => Rule.required(),
        },
    ],
};

export const homeScreenFeaturedPoolGroupPoolId = {
    name: 'homeScreenFeaturedPoolGroupPoolId',
    title: 'Pool id',
    type: 'object',
    fields: [
        {
            name: 'poolId',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ],
};

export const homeScreenFeaturedPoolGroupExternalLink = {
    name: 'homeScreenFeaturedPoolGroupExternalLink',
    title: 'External Link',
    type: 'object',
    fields: [
        {
            name: 'id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'buttonText',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'buttonUrl',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
};

export const homeScreenNewsItem = {
    name: 'homeScreenNewsItem',
    type: 'object',
    fields: [
        {
            name: 'id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'timestamp',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'source',
            type: 'string',
            options: {
                list: [
                    { title: 'Twitter', value: 'twitter' },
                    { title: 'Discord', value: 'discord' },
                    { title: 'Medium', value: 'medium' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            description: 'image is optional',
            type: 'image',
        },
    ],
};
