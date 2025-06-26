/**
 * spc-node router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::spc-node.spc-node',{
    config: {
        find:{
            middlewares: ["api::spc-node.spc-nodes-populate"]
        },
         findOne:{
            middlewares: ["api::spc-node.spc-nodes-populate"]
        }
    }
});
