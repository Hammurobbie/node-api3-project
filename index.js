// code away!
require("dotenv").config();

const cors = require("cors");

const server = require("./server");

server.use(cors());

const port = process.env.PORT;

server.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
