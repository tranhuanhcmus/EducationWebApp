import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import Route from "./routes/Route.js";
import express from "express";
const app = express();

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
        origin: true,
    })
);

//app can read json file
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api", Route);

//connect to DB
db.connect((error) => {
    if (error) return console.log(error);
    console.log("Connect to DB success");
    app.listen(5000, () => console.log("Server work on url http://localhost:5000"));
});