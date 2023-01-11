module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1876),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ea2862f0f30cd88ea03ed4fb9ed59eed'),
    },
  },
});
