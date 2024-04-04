import {
  checkIn
} from "./chunk-EG53G5O7.mjs";
import {
  createEvent
} from "./chunk-BBUBXTTA.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-DTQOQ6XE.mjs";
import {
  getEventAttendees
} from "./chunk-DSNLU3ES.mjs";
import {
  getEvent
} from "./chunk-YHEWC7CJ.mjs";
import {
  registerForEvent
} from "./chunk-CLOD44UP.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getEventAttendees);
app.register(getAttendeeBadge);
app.register(checkIn);
app.listen({ port: 3333 }).then(() => {
});
