
import dotenv from 'dotenv';


setTimeout(() => {
    console.log(`end of delay`);
    dotenv.config({ path: `./.env`, override: true });
    const readEnv = process.env.OPENAI_API_KEY;
}, 30000);

// fudge



//export default readEnv;