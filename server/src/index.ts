import express from "express";
import cors from "cors";
import cocktailRouter from "./router/cocktail.router.js";
import { errorHandler, notFound } from "./middleware/middleware.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: true, // Accept all origins
  }),
);

app.use(express.json());

app.use("/cocktails", cocktailRouter);
// app.use("/order", ordersROuter);

app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
