/**
 * fmea-node router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::fmea-node.fmea-node',{
    config: {
        find:{
            middlewares: ["api::fmea-node.fmea-nodes-populate"]
        },
         findOne:{
            middlewares: ["api::fmea-node.fmea-nodes-populate"]
        }
    }
});
