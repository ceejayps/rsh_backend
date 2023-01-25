
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: "mongodb:localhost/wahnexttest",
//         srv:  !true,
//         port: 27017, //env.int('DATABASE_PORT', 1874),
//         database: 'wahnexttest'//"arcadeKid",
//       },
//       options: {
//         authenticationDatabase: null,
//         ssl: false,
//       },
//     },
//   },
// })


// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST'),
//         srv: env.bool('DATABASE_SRV', true),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME'),
//         username: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   },
// });"mongodb+srv://root:password@mongodb:27017/test?retryWrites=true&w=majority"


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: "mongodb",//env('DATABASE_HOST'),
        srv: !true,
        port:  27017,
        database: 'text',
        username: "root",
        password: "password",
      
      },
      options: {
        authenticationDatabase: null,
        ssl:  !true,
      },
    },
  },
});//"mongodb+srv://root:password@mongodb:27017/test?retryWrites=true&w=majority"


// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: "mongodb+srv://root:password@0.0.0.0:27017/test?retryWrites=true&w=majority",
//         srv: true,
//         port: 27017, //env.int('DATABASE_PORT', 1874),
//         database: 'text'//"arcadeKid",
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// })








// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST'),
//         srv: env.bool('DATABASE_SRV', true),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME'),
//         username: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   },
// });


//local testing
/*
 module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://localhost/wah-nex",
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 1876),
        database: "arcadeKid",
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
})
*/