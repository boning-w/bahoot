import swaggerJSDoc from "swagger-jsdoc";

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.1.0",
    info: {
      version: "0.0.0",
      title: "Bahoot CRUD Server",
      description: "Server that powers the Bahoot frontend",
    },
  },
  apis: ["./src/**/*.ts"], // files containing annotations as above
};

export const SWAGGER_CONFIG = swaggerJSDoc(options);
