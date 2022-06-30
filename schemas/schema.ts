// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import config, { configFeaturedPool, configNewsItem, configPoolFilter } from './config';
import fantomToken from './fantomToken';
import rinkebyToken from './rinkebyToken';
import { lbp } from './lbp';
import optimismToken from './optimismToken';
import {
    homeScreen,
    homeScreenFeaturedPoolGroup,
    homeScreenFeaturedPoolGroupExternalLink,
    homeScreenFeaturedPoolGroupPoolId,
    homeScreenNewsItem,
} from './homeScreen';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        config,
        fantomToken,
        rinkebyToken,
        optimismToken,
        lbp,
        configFeaturedPool,
        configNewsItem,
        configPoolFilter,
        homeScreen,
        homeScreenFeaturedPoolGroup,
        homeScreenFeaturedPoolGroupExternalLink,
        homeScreenFeaturedPoolGroupPoolId,
        homeScreenNewsItem,
    ]),
});
