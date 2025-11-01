/* Required Statements */
const express = require("express");
const app = express();
const route = require("./routes");
const { connectDB } = require("./database/connection");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const static = require("./routes/static");

/* Local */
const port = process.env.PORT || 8080;

/* Swagger */
app.get("/swagger.json", (req, res) => {
  const file = fs.readFileSync("./swagger.json");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.parse(file));
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(null, { swaggerUrl: "/swagger.json" })
);

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use(static);
app.use("/", route);

/* Confirm Operation */
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app listening on ${port}`);
  });
});
