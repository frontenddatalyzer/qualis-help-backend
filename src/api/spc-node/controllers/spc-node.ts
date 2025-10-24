/**
 * spc-node controller
 * 
 * File: src/api/spc-node/controllers/spc-node.js
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::spc-node.spc-node', ({ strapi }) => ({
  /**
   * Custom find method to ensure proper population of nested relations
   * This fixes the inconsistent API response when creating new folders
   */
  async find(ctx) {
    try {
      // Define deep populate configuration
      // Using 'as any' to bypass TypeScript strict typing for deep nesting
      const populateConfig: any = {
        children: {
          populate: {
            children: {
              populate: {
                children: {
                  populate: {
                    children: {
                      populate: {
                        children: true, // 5 levels deep
                        parent: {
                          fields: ['id', 'documentId', 'text', 'type']
                        },
                        navigation: true
                      }
                    },
                    parent: {
                      fields: ['id', 'documentId', 'text', 'type']
                    },
                    navigation: true
                  }
                },
                parent: {
                  fields: ['id', 'documentId', 'text', 'type']
                },
                navigation: true
              }
            },
            parent: {
              fields: ['id', 'documentId', 'text', 'type']
            },
            navigation: true
          }
        },
        parent: {
          fields: ['id', 'documentId', 'text', 'type']
        },
        navigation: true
      };

      // Fetch only root nodes (nodes without parent)
      // This ensures we get the 'spc' root folder, not all flattened nodes
      const entities = await strapi.entityService.findMany(
        'api::spc-node.spc-node',
        {
          populate: populateConfig as any,
          filters: {
            parent: {
              id: {
                $null: true
              }
            }
          },
          sort: { id: 'asc' }
        }
      );

      // Return formatted response (compatible with your Angular code)
      return {
        data: entities,
        meta: {
          pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: Array.isArray(entities) ? entities.length : 0
          }
        }
      };

    } catch (err) {
      ctx.throw(500, err);
    }
  },

  /**
   * Custom findOne method for individual node fetching
   */
  async findOne(ctx) {
    const { id } = ctx.params;

    try {
      // Use findMany with filters instead of deprecated findOne
      const entities = await strapi.entityService.findMany(
        'api::spc-node.spc-node',
        {
          filters: {
            id: id
          },
          populate: {
            children: {
              populate: {
                children: {
                  populate: {
                    children: true
                  }
                }
              }
            },
            parent: {
              fields: ['id', 'documentId', 'text', 'type']
            },
            navigation: true
          } as any
        }
      );

      // Return first result (should only be one with id filter)
      const entity = Array.isArray(entities) ? entities[0] : entities;
      return { data: entity };

    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));