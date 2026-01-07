we have a collection types 
# sureler
- /content-types/sureler/schema.json
```json
{
  "kind": "collectionType",
  "collectionName": "surelers",
  "info": {
    "singularName": "sureler",
    "pluralName": "surelers",
    "displayName": "Surah"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "index_number": {
      "type": "integer",
      "required": true,
      "unique": true,
      "min": 1
    },
    "name_arabic": {
      "type": "string",
      "required": true
    },
    "name_turkish": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text",
      "required": false
    },
    "type": {
      "type": "enumeration",
      "required": true,
      "default": "Mekki",
      "enum": [
        "Mekki",
        "Medeni"
      ]
    },
    "order_of_revelation": {
      "type": "integer",
      "required": true,
      "min": 1
    },
    "verse_count": {
      "type": "integer",
      "required": true,
      "min": 1
    },
    "verses": {
      "type": "component",
      "component": "layout.verses",
      "repeatable": true
    }
  }
}
```
- / controllers/sureler.ts
```ts
/**
 * sureler controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sureler.sureler');
```
- /middlewares/sureler-populate.ts
```ts
/**
 * `sureler-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate ={
  verses : {
    populate:{
      deep_notes:true
    }
  }
}
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.

  return async (ctx, next) => {
    console.log(ctx)
    ctx.query.populate = populate
    strapi.log.info('In sureler-populate middleware.');

    await next();
  };
};
```
- /routes/sureler.ts
```ts
/**
 * sureler router
 */

import { factories } from '@strapi/strapi';



export default factories.createCoreRouter('api::sureler.sureler',
    {
        config:{
            find:{
                middlewares:["api::sureler.sureler-populate"]
            },
            create:{
                middlewares:["api::sureler.sureler-populate"]
            }
        }
    }
);
```
- /services/sureler.ts
```ts
/**
 * sureler service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::sureler.sureler');

```