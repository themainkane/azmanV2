import connectToDataBase from "./functions/connectToDataBase";
import startApolloServer from "./functions/startApolloServer";
import schema from "./graphql/schema";
import { logErrorMessage } from "./helpers/logging";

async function runServer() {
  try {
    await connectToDataBase();
    await startApolloServer(schema);
  } catch (error) {
    logErrorMessage("Failed to run the server", error);
  }
}

runServer();
