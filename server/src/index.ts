import express from "express";
import cors from "cors";
import cocktailRouter from "./router/cocktailRouter.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: true, // Accept all origins
  }),
);

app.use(express.json());

app.use("/cocktails", cocktailRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
