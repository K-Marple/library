/* Required Statements */
const swaggerAutogen = require("swagger-autogen")();

/* Swagger */
const doc = {
  info: {
    title: "Library API",
    description:
      "API of books and authors by KM. Based on personal collection.",
  },
  host:
    process.env.NODE_ENV === "production"
      ? "library-hk2y.onrender.com"
      : "localhost:8080",
  schemes: [process.env.NODE_ENV === "production" ? "https" : "http"],
};

const outputFile = "./swagger.json";
const endpointFile = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFile, doc).then(() => {
  console.log("Swagger generated. Run server.");
});
