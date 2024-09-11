import express, { Request, Response, Express } from "express";
import { config } from "dotenv";
import { passportMiddleware } from "./middlewares/loggedin";
import headerMiddleware, { corsOptionsMiddleware } from "./middlewares/cors";
import router from "./routes/router";
import fileupload from "express-fileupload";
config();

const app: Express = express();
const PORT = process.env.PORT;

if (!PORT) throw new Error("Port is not defined");

app.use(passportMiddleware);

app.use(corsOptionsMiddleware);
app.use(headerMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(fileupload());
app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
