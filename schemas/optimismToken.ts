import { RiCoinsLine as icon } from 'react-icons/ri';
import { tokenFields } from './tokenFields';

export default {
    name: 'optimismToken',
    title: 'Optimism Token',
    type: 'document',
    icon,
    fields: tokenFields,
    preview: {
        select: {
            name: 'name',
            symbol: 'symbol',
        },
        prepare(selection) {
            return {
                title: selection.name,
                subtitle: selection.symbol,
            };
        },
    },
};
