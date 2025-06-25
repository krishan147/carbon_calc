import fs from 'fs';
import path from 'path';


function getSecret() {
  const isWindows = navigator.platform.startsWith("Win");
  if (isWindows) {
    const filePath = path.join("C:", "google_drive", "homeworkv2", "py_scripts", "creds", "openRouter.json");
    const data = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(data);
    console.log("Windows");
    console.log(json);
  } else {
    console.log("Not Windows");
  }
}
getSecret();
console.log("hello")

export function test(){
  console.log("test")
}


// export async function openRouter(prompt) {
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer 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",
//         "HTTP-Referer": "openrouter.ai",
//         "X-Title": "openrouter.ai",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "deepseek/deepseek-chat-v3-0324:free",
//         messages: [
//           {
//             role: "user",
//             content: prompt
//           }
//         ]
//       })
//     });
  
//     const data = await response.json();
//     const choice_0 = data["choices"][0]["message"]["content"]
//     return choice_0;
//   }
  
//   var response = await openRouter("hello") 
//   console.log(response)
