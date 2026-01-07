export default {
  routes: [
    {
     method: 'POST',
     path: '/seed-surahs',
     handler: 'seed-surahs.seed',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
