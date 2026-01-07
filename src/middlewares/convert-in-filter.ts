/**
 * `convert-in-filter` middleware
 */

// import type { Core } from '@strapi/strapi';

// export default (config, { strapi }: { strapi: Core.Strapi }) => {
//   // Add your own logic here.
//   return async (ctx, next) => {
//     strapi.log.info('In convert-in-filter middleware.');

//     await next();
//   };
// };



/**
 * `convert-in-filter` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    if (ctx.query?.filters) {
      const filters = ctx.query.filters;

      for (const key in filters) {
        const value = filters[key];

        // Convert: filters[id][$in]=1,2,3 --> ["1", "2", "3"]
        if (value?.$in && typeof value.$in === "string") {
          value.$in = value.$in
            .split(',')
            .map(v => v.trim())
            .filter(Boolean);
        }
      }
    }

    await next();
  };
};

