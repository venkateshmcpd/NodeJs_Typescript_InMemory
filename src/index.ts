import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import {StudentRouter } from "./routers/StudentRouter";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/", StudentRouter);

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})

app.get("/", (req: Request, res: Response) => {
    console.log("default API called");
    res.send("Default API called");
});