export async function handleOSFlow(say, input, steps) {
  // Simple decision‑tree walkthrough
  for (const step of steps) {
    await say(step.prompt);
    // In a complete version, you’d wait for user reply and branch accordingly
  }
}
