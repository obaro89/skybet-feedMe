const App = require("./server");
const FeedsController = require("./controller/feeds");

const PORT = 4000 | process.env.PORT;

const app = new App([new FeedsController()], PORT);

app.listen();
