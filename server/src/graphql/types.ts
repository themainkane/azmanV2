import { mergeTypeDefs } from "@graphql-tools/merge";
import user from "./entity/user/user.types.graphql";

export default mergeTypeDefs([user]);
