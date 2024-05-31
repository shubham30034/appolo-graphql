const {ApolloServer} = require("@apollo/server");
const { User } = require("./user");
// const User = require("./user/index")

async function createGraphqlServer(){
    const server = new ApolloServer({
        typeDefs:`
         type Query {
            _empty:String
         }
         type Mutation {
            ${User.mutation}
         }
        
        `,
        resolvers:{
            Query:{
              ...User.resolvers.queries
            },
            Mutation:{
               ...User.resolvers.mutations
            }
        },
    })
    
    await server.start();

return server


}

module.exports = createGraphqlServer