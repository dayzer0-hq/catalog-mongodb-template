// ping.js — the health check for this starter.
// Connects to the current database and confirms the server answers.
// Run: mongosh "mongodb://localhost:27017/dayzero" scripts/ping.js

const res = db.runCommand({ ping: 1 });
if (res.ok === 1) {
  print("ping: ok — connected to " + db.getName());
} else {
  print("ping: FAILED");
  printjson(res);
  quit(1);
}
