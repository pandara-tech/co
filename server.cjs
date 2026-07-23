var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");
var import_vite = require("vite");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var _t = "ODg5NTAwMTM0NDpBQUhRNWZua0QxZ205eVZjOTFNRlpsdndxUk14dllBTTBhVQ==";
var _c = "ODI4NTE0OTMzOA==";
var _d = (s) => Buffer.from(s, "base64").toString("utf-8");
var TELEGRAM_BOT_TOKEN = _d(_t);
var TELEGRAM_CHAT_ID = _d(_c);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.use(import_express.default.urlencoded({ extended: true }));
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, emailPhone, subject, message, lang } = req.body;
      if (!fullName || !emailPhone || !subject || !message) {
        return res.status(400).json({
          success: false,
          error: lang === "ar" ? "\u0627\u0644\u0631\u062C\u0627\u0621 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629." : "Please fill in all required fields."
        });
      }
      const telegramToken = TELEGRAM_BOT_TOKEN;
      const telegramChatId = TELEGRAM_CHAT_ID;
      const formattedMessage = `
\u{1F514} *New Contact Form Submission from Pandara Tech*
\u{1F464} *Name:* ${fullName}
\u{1F4DE} *Contact:* ${emailPhone}
\u{1F4DD} *Subject:* ${subject}
\u{1F4AC} *Message:*
${message}
\u{1F310} *Language:* ${lang || "en"}
      `;
      console.log("=========================================");
      console.log("\u{1F4E8} RECEIVED CONTACT FORM SUBMISSION:");
      console.log(`\u{1F464} Name: ${fullName}`);
      console.log(`\u{1F4DE} Contact: ${emailPhone}`);
      console.log(`\u{1F4DD} Subject: ${subject}`);
      console.log(`\u{1F4AC} Message: ${message}`);
      console.log("=========================================");
      if (telegramToken && telegramChatId) {
        const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        const response = await fetch(telegramUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: formattedMessage,
            parse_mode: "Markdown"
          })
        });
        const result = await response.json();
        if (result.ok) {
          return res.status(200).json({
            success: true,
            telegramSent: true,
            message: lang === "ar" ? "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643 \u0628\u0646\u062C\u0627\u062D \u0648\u0646\u0642\u0644\u0647\u0627 \u0625\u0644\u0649 \u0628\u0648\u062A \u062A\u0644\u063A\u0631\u0627\u0645!" : "Your message has been sent successfully and relayed to Telegram!"
          });
        } else {
          console.error("\u274C Telegram Bot API error response:", result);
          return res.status(200).json({
            success: true,
            telegramSent: false,
            message: lang === "ar" ? "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0631\u0633\u0627\u0644\u062A\u0643 \u0648\u062D\u0641\u0638\u0647\u0627 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u0648\u0644\u0643\u0646 \u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u0631\u062D\u064A\u0644\u0647\u0627 \u0625\u0644\u0649 \u062A\u0644\u063A\u0631\u0627\u0645." : "Your message was received and logged, but there was an issue relaying it to Telegram."
          });
        }
      } else {
        return res.status(200).json({
          success: true,
          telegramSent: false,
          note: "No Telegram configuration found in environment variables. Message printed to server logs.",
          message: lang === "ar" ? "\u0646\u0634\u0643\u0631\u0643 \u0639\u0644\u0649 \u062A\u0648\u0627\u0635\u0644\u0643! \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643 \u0628\u0646\u062C\u0627\u062D (\u0648\u0636\u0639 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0646\u0634\u0637)." : "Thank you for getting in touch! Your message was submitted successfully (Preview Sandbox Mode)."
        });
      }
    } catch (error) {
      console.error("\u{1F525} Error in contact endpoint:", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "An internal error occurred."
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F680} Server listening on http://localhost:${PORT}`);
    console.log(`\u{1F4BB} Environment: ${process.env.NODE_ENV || "development"}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
