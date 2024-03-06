import { JSONSchemaType } from "ajv";
import { ISignInRequest } from "./signin";

const schema: JSONSchemaType<ISignInRequest> = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export default schema;