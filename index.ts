import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
import { isSiaLink, translateSiaLink } from "https://deno.land/x/gh:ro-tex:sia-links@v0.1.1/index.js";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  let msg: string = "Hello World\n";

  if (req.url.length > 1) {
    const link = "sia:/" + req.url;
    if (isSiaLink(link)) {
      const translated = translateSiaLink(link);
      if (translated != null) {
        msg = `<a href="${translated}">${translated}</a>`;
      }
    }
  }

  req.respond({ body: msg });
}

