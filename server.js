import server from "./index.js";
import { connectDB } from "./config/db.js";
server.listen(process.env.PORT, ()=>
{
    connectDB();
    console.log('http://localhost:'+process.env.PORT);
})