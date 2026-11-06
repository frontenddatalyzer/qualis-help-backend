/**
 * msa-node router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::msa-node.msa-node',{
    config: {
        find:{
            middlewares: ["api::msa-node.msa-nodes-populate"]
        },
         findOne:{
            middlewares: ["api::msa-node.msa-nodes-populate"]
        }
    }
});
