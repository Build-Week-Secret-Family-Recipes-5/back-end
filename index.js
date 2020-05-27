// require("dotenv").config()
const server = require('./server/server');

const PORT = process.env.PORT || 6040;

server.listen(PORT, () => {
  console.log(`API is istening on port ${PORT}...`);
});