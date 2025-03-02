console.log("\n\n--------------------stared--------------------------\n\n");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json"); // 指向 db.json 文件
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Vercel 会设置 PORT 环境变量
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
