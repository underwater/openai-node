
import dotenv from 'dotenv';
dotenv.config();
const readEnv = process.env.OPENAI_API_KEY;
console.log(`readEnv: ${readEnv}`);

export default readEnv;