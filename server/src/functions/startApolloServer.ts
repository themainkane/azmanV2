import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import { json } from "body-parser";
import { logErrorMessage } from "../helpers/logging";

export default async function startApolloServer(schema: any) {
  try {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
      schema,
      csrfPrevention: true, //for file uploads
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], //recomended by apollo for graceful failures
      //other server configuarion
    });

    // Start the Apollo Server
    await server.start();

    // Apply middleware
    app.use(
      "/graphql",
      cors({
        credentials: true,
      }),
      json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );
    const PORT = process.env.PORT || 3003;

    await new Promise<void>((resolve) =>
      httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  } catch (error) {
    logErrorMessage("Failed to start ApolloServer", error);
  }
}
