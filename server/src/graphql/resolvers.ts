import { mergeResolvers } from "@graphql-tools/merge";
import user from "./entity/user/user.resolver";

export default mergeResolvers([user]);
