// connexion with data 
import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console,'error connexion'))
db.once("open", () => {
    console.log('connexion with data done')
});

const app = express();
app.use(express.json());
routes(app);


export default app