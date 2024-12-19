import User from "../../../models/user";

export default {
  Query: {
    getUser: (parent: any, args: { userId: string }) => {
      return null; // Return null or mock data for now
    },
    getUsers: () => User.find(),
  },
  Mutation: {
    createUser: (
      parent: any,
      args: {
        email: string;
        firstName: string;
        lastName: string;
        roleId: number;
      }
    ) => {
      // Implement logic to create a user
      return null; // Return null or mock data for now
    },
  },
};
