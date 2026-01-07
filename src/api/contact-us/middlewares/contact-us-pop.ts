// /**
//  * `contact-us-pop` middleware
//  */

// import type { Core } from '@strapi/strapi';


// export default (config, { strapi }: { strapi: Core.Strapi }) => {
//   // Add your own logic here.
//   return async (ctx, next) => {
//     strapi.log.info('In contact-us-pop middleware.');

//     await next();
//   };
// };

/**
 * `contact-us-pop` middleware
 */
/**
 * `contact-us-pop` middleware
 */




import type { Core } from '@strapi/strapi';


const populate = {
          linkPack: {
          populate: {
            links: {
              populate: {
                icon: {
                  // Limit media fields at query level
                  fields: ['alternativeText', 'url']
                },
              },
            },
          },
        },
      };

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');

    // ✅ Always inject populate
    ctx.query.populate = populate;

    // ✅ If frontend didn't pass locale, fallback to default ("en")
    if (!ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    await next();
  };
};
