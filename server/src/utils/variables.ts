const { env } = process as { env: { [key: string]: string } };
export const {
  MONGO_URI,
  VERIFICATION_EMAIL,
  PASSWORD_RESET_LINK,
  SIGN_IN_URL,
  JWT_SECRET, // generated from require('crypto').randomBytes(36).toString('hex')
  CLOUD_NAME,
  CLOUD_KEY,
  CLOUD_SECRET,
  APP_USER,
  APP_PASS
} = env;
