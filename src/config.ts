import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
  MONGO_URL: str({ default: 'mongodb://127.0.0.1:27017/cartos' })
});
