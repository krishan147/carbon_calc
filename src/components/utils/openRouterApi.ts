import fs from 'fs';
import path from 'path';


async function getSecret() {
  const isWindows = navigator.platform.startsWith("Win");

  if (isWindows) {
    try {
      const response = await fetch('/deleteme.json');
      const data = await response.json();
      const key = data.key;
      return key

    } catch (error) {
      console.error("Failed to load key:", error);
    }
  } else {
    return "not windows"
  }
}


export async function openRouter(prompt) {
    const secret_openrouter = await getSecret(); 
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": secret_openrouter,
        "HTTP-Referer": "openrouter.ai",
        "X-Title": "openrouter.ai",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });
  
    const data = await response.json();
    const choice_0 = data["choices"][0]["message"]["content"]
    return choice_0;
  }
