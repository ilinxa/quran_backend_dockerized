/**
 * contact-us router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::contact-us.contact-us',

    {
        config:{
            find:{
                middlewares:["api::contact-us.contact-us-pop"]
            },
        }
    }

);


// export default factories.createCoreRouter('api::sureler.sureler',
//     {
//         config:{
//             find:{
//                 middlewares:["api::sureler.sureler-populate"]
//             },
//             findOne: {
//                 middlewares: ["api::sureler.sureler-populate"]
//             },
//             create:{
//                 middlewares:["api::sureler.sureler-populate"]
//             }
//         }
//     }
// );
