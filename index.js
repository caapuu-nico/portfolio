const server = require("./server");
const {main} = require("./db")
const PORT = 3001;

main().catch(err=>console.log(err));
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
