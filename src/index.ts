import express from "express";

import connect from "./database/connect";

connect();

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
