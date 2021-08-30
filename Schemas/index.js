const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = graphql;

const UserType = require('./TypeDefinitions/UserType')
// Mock Data
const userData = require("../MOCK_DATA.json");


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    // Like HTTP endpoints for data
    fields: {
      getAllUsers: {
        // Returns list of users
        type: new GraphQLList(UserType),
        // Args Obj w/ passed in arguments as keys. eg. args.id
        resolve(parent, args) {
          // Make DB specific requests here
          return userData
        }
      },
    }
});
  
// Create, update, delete
const Mutation = new GraphQLObjectType({
name: "Mutation",
fields: {
    createUser: {
    type: UserType,
      args: { 
          first_name: { type: GraphQLString },
          last_name: { type: GraphQLString },
          email: { type: GraphQLString },
          password: { type: GraphQLString },
      },
      // args Obj holds passed arguments as keys.
      resolve(parent, args) {
          // DB Logic
          userData.push({
          id: userData.length + 1,
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          password: args.password
          });
          // Send information back to client for verification
          return args;
      }
    },
  }
});


module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});

