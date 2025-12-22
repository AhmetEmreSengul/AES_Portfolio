import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.route.js";
import { env } from "./lib/env.js";
import path from "path";

const app = express();

app.use(
  cors({
    origin:
      env.NODE_ENV === "development" ? "http://localhost:5173" : env.CLIENT_URL,
  })
);
app.use(express.json());

app.use("/api", chatRoutes);

if (env.NODE_ENV === "production") {
  app.use(express.static(path.join(process.cwd(), "../dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(process.cwd(), "../dist/index.html"));
  });
}

app.listen(env.PORT, () => {
  console.log("Server is running on port", env.PORT);
});
