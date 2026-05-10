const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.CONTACT_PORT || 5000;
const csvDir = path.join(__dirname, "..", "data");
const csvPath = path.join(csvDir, "contact_messages.csv");

function ensureCsvFile() {
  if (!fs.existsSync(csvDir)) {
    fs.mkdirSync(csvDir, { recursive: true });
  }
  if (!fs.existsSync(csvPath)) {
    fs.writeFileSync(csvPath, "timestamp,name,email,subject,message\n", "utf8");
  }
}

function escapeCsv(value) {
  const text = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
  if (text.includes(",") || text.includes("\"") || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > 1024 * 1024) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

ensureCsvFile();

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === "GET" && req.url === "/api/health") {
    return sendJson(res, 200, { ok: true, service: "contact-csv" });
  }

  if (req.method === "POST" && req.url === "/api/contact") {
    try {
      const rawBody = await readBody(req);
      const data = JSON.parse(rawBody || "{}");

      const name = String(data.name || "").trim();
      const email = String(data.email || "").trim();
      const subject = String(data.subject || "").trim();
      const message = String(data.message || "").trim();

      if (!name || !email || !subject || !message) {
        return sendJson(res, 400, { ok: false, error: "All fields are required." });
      }

      const timestamp = new Date().toISOString();
      const line = [timestamp, name, email, subject, message].map(escapeCsv).join(",") + "\n";
      fs.appendFileSync(csvPath, line, "utf8");

      return sendJson(res, 200, { ok: true, message: "Message saved." });
    } catch (error) {
      return sendJson(res, 500, { ok: false, error: error.message || "Server error." });
    }
  }

  return sendJson(res, 404, { ok: false, error: "Not found" });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Contact CSV server running on http://localhost:${PORT}`);
});
