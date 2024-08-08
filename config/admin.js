module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','WxCRBjqe29vRCt6E/8SHyw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'WxCRBjqe29vRCt6E/8SHyw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
