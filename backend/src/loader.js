const app = require("./server/server");
require("./server/database");
require("./routes/routes")(app);
