import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";
import types from "./types";

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: types,
});

export default schema;
