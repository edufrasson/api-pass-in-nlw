import {
  BadRequest
} from "../chunk-JRO4E4TH.mjs";

// src/utils/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, request, reply) => {
  const { validation, validationContext } = error;
  if (error instanceof ZodError)
    return reply.status(400).send({
      message: `Error during validation`,
      errors: error.flatten().fieldErrors
    });
  if (error instanceof BadRequest)
    return reply.status(400).send({ message: error.message });
  return reply.status(500).send({ message: "Internal Server Error" });
};
export {
  errorHandler
};
