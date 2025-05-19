let express =require('express');
let r=require("./Routing/Route");
let db =require("./Connect");
// let admin=require("./Collection/Admin");
let cors= require("cors");
require("dotenv").config();
const ratingRoutes = require("./routes/rating");

let port=process.env.PORT || 4000
let app = express();

app.use(express.json());
app.use(cors());
app.use("/eproject/",r);
app.use("/api/rate", ratingRoutes);

db().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port http://localhost:${port}/eproject`);
    })
}).catch((e)=>{
    console.log(e);
})