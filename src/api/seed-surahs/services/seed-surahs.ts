/**
 * seed-surahs service
 */

// export default () => ({});

import fs from 'fs';
import path from 'path';

export default {
  async seedSurahs({ strapi }) {
    const dataDir = path.join(__dirname, '../../../../../data/surahs');
    const files = fs.readdirSync(dataDir);

    for (const file of files) {
      if (path.extname(file) === '.json') {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(content);
        const data = jsonData.data;

        try {
          const existing = await strapi.db.query('api::sureler.sureler').findOne({
            where: { index_number: data.index_number },
          });

          if (existing) {
            console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
            continue;
          }

          await strapi.entityService.create('api::sureler.sureler', { data });
          console.log(`✅ Seeded surah: ${data.name}`);
        } catch (err) {
          console.error(`❌ Error with ${file}:`, err);
        }
      }
    }

    console.log('🌱 Seeding complete.');
  },
};

