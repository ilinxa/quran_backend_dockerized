// /**
//  * `sureler-populate` middleware
//  */

// import type { Core } from '@strapi/strapi';

// const populate ={
//   verses : {
//     populate:{
//       deep_notes:true
//     }
//   }
// }
// export default (config, { strapi }: { strapi: Core.Strapi }) => {
//   // Add your own logic here.

//   return async (ctx, next) => {
//     console.log(ctx)
//     ctx.query.populate = populate
//     strapi.log.info('In sureler-populate middleware.');

//     await next();
//   };
// };


export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Only populate if fields are not specified
    if (!ctx.query.fields) {
      ctx.query.populate = {
        verses: {
          populate: {
            deep_notes: true
          }
        }
      };
    }
    await next();
  };
};
