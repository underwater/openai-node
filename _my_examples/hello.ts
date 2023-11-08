import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI();
console.log(`process.env.OPENAI_API_KEY: ${process.env['OPENAI_API_KEY']}`);
console.log(`cwd: ${process.cwd()}`);

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Say this is a test' }],
  });
  console.log(completion.choices[0]?.message?.content);
}
process.stdout.write('\n');

main();
