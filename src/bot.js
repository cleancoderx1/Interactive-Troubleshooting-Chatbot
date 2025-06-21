
### src/bot.js

```js
import { App } from '@slack/bolt';
import { handleOSFlow } from './logic/os.js';
import { handleNetworkFlow } from './logic/network.js';
import scenarios from './content/scenarios.json';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Entry point for messages
app.message(async ({ message, say }) => {
  const text = message.text.toLowerCase();

  if (text.includes('os')) {
    await handleOSFlow(say, text, scenarios.os);
  } else if (text.includes('network')) {
    await handleNetworkFlow(say, text, scenarios.network);
  } else {
    await say("Hi! Ask me about `OS` or `Network` issues to get started.");
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ support-bot is running!');
})();
