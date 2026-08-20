import express from "express";
import cors from "cors";
import cocktailController from "./controllers/cocktailController.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: true, // Accept all origins
    credentials: true, // Allow cookies and authentication headers
  }),
);

app.use(express.json());

app.use("/cocktails", cocktailController);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
