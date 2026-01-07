
const { seedSurahs } = require('../../../../scripts/seed.cjs');
// export default {
//   async seed(ctx) {
//     console.log('📩 Seeding request received in controller');
//     try {
//       await seedSurahs({ strapi });
//       ctx.send({ message: 'Seeding complete!' });
//     } catch (err) {
//       console.error('❌ Seeding failed in controller:', err);
//       ctx.throw(500, 'Seeding failed', { details: err });
//     }
//   },
// };



// export default {
//   async seed(ctx) {
//     console.log('📩 Seeding request received in controller');

//     const { seed } = ctx.request.body || {};

//     try {
//       await seedSurahs({ strapi }, seed); // pass `seed` param
//       ctx.send({ message: 'Seeding complete!' });
//     } catch (err) {
//       console.error('❌ Seeding failed in controller:', err);
//       ctx.throw(500, 'Seeding failed');
//     }
//   },
// };


export default {
  async seed(ctx) {
    console.log('📩 Seeding request received in controller');

    const { seed } = ctx.request.body || {};

    try {
      const report = await seedSurahs({ strapi }, seed);
      const totalProcessed = report.processed.length;

      if (totalProcessed === 0 && report.errors.length === 0) {
        ctx.send({
          message: `No new surahs were seeded.`,
          report,
        });
      } else {
        ctx.send({
          message: `Seeding completed.`,
          report,
        });
      }
    } catch (err) {
      console.error('❌ Seeding failed in controller:', err);
      ctx.throw(500, 'Seeding failed', { details: err.message });
    }
  },
};
