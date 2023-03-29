import Express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./connect.js";
import authRoute from "./routes/auth.js";
const app = Express();

//setting header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//app can word with cookie
app.use(cookieParser());

//app permit access from client
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

//app can read json file
app.use(Express.json());

//routes
app.use("/api/auth", authRoute);
//connect to DB
db.connect((error) => {
    if (error) return console.log(error);
    console.log("Connect to DB success");
    app.listen(5000, () => console.log("Server Work!"));
});