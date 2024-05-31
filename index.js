const express = require("express")
const app = express()
const cors = require("cors")
const {ApolloServer} = require("@apollo/server")
const {expressMiddleware} = require("@apollo/server/express4")

app.use(cors())
app.use(express.json())
const PORT = 5000


const ourServer= async()=>{
    const server = new ApolloServer({
        typeDefs:`
         type Query {
            hello : String
            say(name:String) : String
         }
        
        `,
        resolvers:{
            Query:{
                hello : ()=> `HEY THERE I AM SHUBHAM KUNDU`,
                say : (_,{name})=> `HEY ${name}, HOW ARE U DOING TODAY`
            }
        },
    })
    
    await server.start();

    app.use('/graphql',  expressMiddleware(server));
    
    
    
    
    app.listen(PORT,()=>{
        console.log(`Server is satrted at PORT ${PORT}`);
    })

}


ourServer()
