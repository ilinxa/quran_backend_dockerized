
// const fs = require('fs');
// const path = require('path');

// const dataDir = path.join(__dirname, '..', 'data', 'surahs');

// module.exports = async ({ strapi }: { strapi: any }) => {
//   const files = fs.readdirSync(dataDir);

//   for (const file of files) {
//     if (path.extname(file) === '.json') {
//       const filePath = path.join(dataDir, file);
//       const content = fs.readFileSync(filePath, 'utf8');
//       const jsonData = JSON.parse(content);
//       const data = jsonData.data;

//       try {
//         const existingSurah = await strapi.db.query('api::sureler.sureler').findOne({
//           where: { index_number: data.index_number },
//         });

//         if (existingSurah) {
//           console.log(`Surah with index_number ${data.index_number} already exists, skipping.`);
//           continue;
//         }

//         await strapi.entityService.create('api::sureler.sureler', {
//           data,
//         });
//         console.log(`Successfully seeded surah from ${file}`);
//       } catch (error) {
//         console.error(`Error seeding surah from ${file}:`, error);
//       }
//     }
//   }
// };
// -------------------------------------------------------------------------------
// import fs from 'fs';
// import path from 'path';

// /**
//  * Seeds all surahs into the Strapi database
//  */
// export async function seedSurahs({ strapi }) {
//   const dataDir = path.join(__dirname, '..', 'data', 'surahs');
//   const files = fs.readdirSync(dataDir);

//   for (const file of files) {
//     if (path.extname(file) === '.json') {
//       const filePath = path.join(dataDir, file);
//       const content = fs.readFileSync(filePath, 'utf8');
//       const jsonData = JSON.parse(content);
//       const data = jsonData.data;

//       try {
//         const existing = await strapi.db.query('api::sureler.sureler').findOne({
//           where: { index_number: data.index_number },
//         });

//         if (existing) {
//           console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
//           continue;
//         }

//         await strapi.entityService.create('api::sureler.sureler', { data });
//         console.log(`✅ Seeded surah: ${data.name}`);
//       } catch (err) {
//         console.error(`❌ Error with ${file}:`, err);
//       }
//     }
//   }

//   console.log('🌱 Seeding complete.');
// }

// /**
//  * If executed directly (node scripts/seed.cjs), bootstrap Strapi and run seedSurahs()
//  */
// // if (process.argv[1] === new URL(import.meta.url).pathname) {
// //   const strapiFactory = (await import('@strapi/strapi')).default;
// //   const app = await strapiFactory().load();
// //   await seedSurahs({ strapi: app });
// //   await app.destroy();
// //   process.exit(0);
// // }

// -------------------------------------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// /**
//  * Seeds all surahs into the Strapi database
//  */
// async function seedSurahs({ strapi }) {
//   // ✅ Resolve to real project root (even when running from dist/)
//   const rootDir = path.resolve(__dirname, '../../'); // go two levels up from dist/scripts
//   const dataDir = path.join(rootDir, 'data', 'surahs');

//   console.log('📁 Looking for surah files in:', dataDir);

//   if (!fs.existsSync(dataDir)) {
//     console.error('❌ Data directory does not exist:', dataDir);
//     throw new Error(`Data directory not found: ${dataDir}`);
//   }

//   const files = fs.readdirSync(dataDir);

//   for (const file of files) {
//     if (path.extname(file) === '.json') {
//       const filePath = path.join(dataDir, file);
//       const content = fs.readFileSync(filePath, 'utf8');
//       const jsonData = JSON.parse(content);
//       const data = jsonData.data;

//       try {
//         const existing = await strapi.db.query('api::sureler.sureler').findOne({
//           where: { index_number: data.index_number },
//         });

//         if (existing) {
//           console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
//           continue;
//         }

//         await strapi.entityService.create('api::sureler.sureler', { data });
//         console.log(`✅ Seeded surah: ${data.name}`);
//       } catch (err) {
//         console.error(`❌ Error seeding ${file}:`, err);
//       }
//     }
//   }

//   console.log('🌱 Seeding complete.');
// }

// module.exports = { seedSurahs };
// -------------------------------------------------------------------------
// const fs = require('fs');
// const path = require('path');

// async function seedSurahs({ strapi }) {
//   const rootDir = path.resolve(__dirname, '../../');
//   const dataDir = path.join(rootDir, 'data', 'surahs');

//   console.log('📁 Looking for surah files in:', dataDir);

//   if (!fs.existsSync(dataDir)) {
//     console.error('❌ Data directory does not exist:', dataDir);
//     throw new Error(`Data directory not found: ${dataDir}`);
//   }

//   const files = fs.readdirSync(dataDir);
//   console.log(`📌 Found ${files.length} files in /data/surahs`);

//   for (const file of files) {
//     if (path.extname(file) === '.json') {
//       const filePath = path.join(dataDir, file);
//       console.log(`📌 Reading file: ${filePath}`);

//       const content = fs.readFileSync(filePath, 'utf8');
//       const jsonData = JSON.parse(content);
//       const data = jsonData.data;

//       try {
//         const existing = await strapi.db.query('api::sureler.sureler').findOne({
//           where: { index_number: data.index_number },
//         });

//         if (existing) {
//           console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
//           continue;
//         }

//         await strapi.entityService.create('api::sureler.sureler', { data });
//         console.log(`✅ Seeded surah: ${data.name}`);
//       } catch (err) {
//         console.error(`❌ Error seeding ${file}:`, err);
//       }
//     }
//   }

//   console.log('🌱 Seeding complete.');
// }

// module.exports = { seedSurahs };
// ------------------------------------------------------------------
// path: src/api/seed-surahs/controllers/seed-surahs.js

// src/api/seed-surahs/controllers/seed-surahs.js
// scripts/seed.cts
// const fs = require('fs');
// const path = require('path');

// /**
//  * Seeds all Surahs into the Strapi database
//  * Works on both local and Strapi Cloud deployments.
//  */
// async function seedSurahs({ strapi }) {
//   try {
//     // ✅ Resolve to the true project root (handles dist/ execution)
//     const possibleRoots = [
//       path.resolve(__dirname, '../../'), // when running from dist/
//       path.resolve(__dirname, '../'),    // when running locally
//     ];

//     let dataDir;
//     for (const root of possibleRoots) {
//       const tryPath = path.join(root, 'data', 'surahs');
//       if (fs.existsSync(tryPath)) {
//         dataDir = tryPath;
//         break;
//       }
//     }

//     if (!dataDir) {
//       throw new Error('❌ Could not locate /data/surahs folder in any known path');
//     }

//     console.log('📁 Using surah data directory:', dataDir);

//     const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
//     console.log(`📊 Found ${files.length} surah files to seed`);

//     let added = 0;
//     let skipped = 0;
//     let failed = 0;

//     // ✅ Sequential async loop
//     for (const file of files) {
//       const filePath = path.join(dataDir, file);
//       console.log(`📄 Reading file: ${filePath}`);

//       try {
//         const content = fs.readFileSync(filePath, 'utf8');
//         const jsonData = JSON.parse(content);
//         const data = jsonData.data;

//         if (!data?.index_number) {
//           console.warn(`⚠️ Skipping ${file}: missing index_number`);
//           failed++;
//           continue;
//         }

//         const existing = await strapi.db.query('api::sureler.sureler').findOne({
//           where: { index_number: data.index_number },
//         });

//         if (existing) {
//           console.log(`⏩ Surah ${data.index_number} already exists (${data.name}), skipping.`);
//           skipped++;
//           continue;
//         }

//         await strapi.entityService.create('api::sureler.sureler', { data });
//         console.log(`✅ Seeded surah: ${data.name}`);
//         added++;
//       } catch (err) {
//         console.error(`❌ Failed to seed ${file}:`, err);
//         failed++;
//       }
//     }

//     console.log(`🌱 Seeding complete — Added: ${added}, Skipped: ${skipped}, Failed: ${failed}`);
//     return { added, skipped, failed, message: 'Seeding complete!' };
//   } catch (err) {
//     console.error('💥 Seeding process failed:', err);
//     throw err;
//   }
// }

// module.exports = { seedSurahs };


// //  GOOD ++++++ ------------------------------------------------------------------------
// const fs = require('fs');
// const path = require('path');

// /**
//  * Seeds a single surah or all surahs into the Strapi database
//  * @param {*} strapi - The Strapi instance
//  * @param {*} seedParam - Either a number (like 1) or undefined for all
//  */
// async function seedSurahs({ strapi }, seedParam = undefined) {
//   const rootDir = path.resolve(__dirname, '../../');
//   const dataDir = path.join(rootDir, 'data', 'surahs');

//   console.log('📁 Looking for surah files in:', dataDir);

//   if (!fs.existsSync(dataDir)) {
//     console.error('❌ Data directory does not exist:', dataDir);
//     throw new Error(`Data directory not found: ${dataDir}`);
//   }

//   const seedFiles = [];

//   if (seedParam) {
//     const singleFile = `${String(seedParam)}.json`;
//     seedFiles.push(singleFile);
//   } else {
//     seedFiles.push(...fs.readdirSync(dataDir).filter(f => path.extname(f) === '.json'));
//   }

//   for (const file of seedFiles) {
//     const filePath = path.join(dataDir, file);

//     if (!fs.existsSync(filePath)) {
//       console.warn(`⚠️ File does not exist: ${file}`);
//       continue;
//     }

//     const content = fs.readFileSync(filePath, 'utf8');
//     const jsonData = JSON.parse(content);
//     const data = jsonData.data;

//     try {
//       const existing = await strapi.db.query('api::sureler.sureler').findOne({
//         where: { index_number: data.index_number },
//       });

//       if (existing) {
//         console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
//         continue;
//       }

//       await strapi.entityService.create('api::sureler.sureler', { data });
//       console.log(`✅ Seeded surah: ${data.name}`);
//     } catch (err) {
//       console.error(`❌ Error seeding ${file}:`, err);
//     }
//   }

//   console.log('🌱 Seeding complete.');
// }

// module.exports = { seedSurahs };
const fs = require('fs');
const path = require('path');

/**
 * Seeds one or all surah files into the Strapi database
 * @param {*} strapi
 * @param {*} seedParam - e.g. 1 or "1" to seed a specific file, or undefined to seed all
 * @returns {object} - status report
 */
async function seedSurahs({ strapi }, seedParam = undefined) {
  const rootDir = path.resolve(__dirname, '../../');
  const dataDir = path.join(rootDir, 'data', 'surahs');

  console.log('📁 Looking for surah files in:', dataDir);

  if (!fs.existsSync(dataDir)) {
    console.error('❌ Data directory does not exist:', dataDir);
    throw new Error(`Data directory not found: ${dataDir}`);
  }

  const resultReport = {
    totalFiles: 0,
    processed: [],
    skipped: [],
    errors: [],
    notFound: [],
  };

  const seedFiles = [];

  if (seedParam) {
    const fileName = `${String(seedParam)}.json`;
    const filePath = path.join(dataDir, fileName);

    if (!fs.existsSync(filePath)) {
      resultReport.notFound.push(fileName);
      return resultReport;
    }

    seedFiles.push(fileName);
  } else {
    seedFiles.push(...fs.readdirSync(dataDir).filter(f => path.extname(f) === '.json'));
  }

  resultReport.totalFiles = seedFiles.length;

  for (const file of seedFiles) {
    const filePath = path.join(dataDir, file);

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(content);
      const data = jsonData.data;

      const existing = await strapi.db.query('api::sureler.sureler').findOne({
        where: { index_number: data.index_number },
      });

      if (existing) {
        console.log(`⚠️ Surah ${data.index_number} already exists, skipping...`);
        resultReport.skipped.push(file);
        continue;
      }

      await strapi.entityService.create('api::sureler.sureler', { data });
      console.log(`✅ Seeded surah: ${data.name}`);
      resultReport.processed.push(file);
    } catch (err) {
      console.error(`❌ Error seeding ${file}:`, err);
      resultReport.errors.push({ file, error: err.message });
    }
  }

  console.log('🌱 Seeding complete.');
  return resultReport;
}

module.exports = { seedSurahs };
