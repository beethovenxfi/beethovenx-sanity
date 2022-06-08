import defaultResolve from 'part:@sanity/base/document-actions';
import { ImportCoingeckoDataAction } from './plugins/importCoingeckoDataAction';

export default function resolveDocumentActions(props) {
    if (['fantomToken', 'optimismToken', 'rinkebyToken'].includes(props.type)) {
        return [...defaultResolve(props), ImportCoingeckoDataAction];
    }

    return defaultResolve(props);
}
