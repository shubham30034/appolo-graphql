const express = require("express")
const app = express()
const cors = require("cors")
const  createGraphqlServer = require("./graphql/index")

const {expressMiddleware} = require("@apollo/server/express4")


app.use(cors())
app.use(express.json())
const PORT = 5000


const ourServer= async()=>{


    const server = await createGraphqlServer()
    
    app.use('/graphql',  expressMiddleware(server));
    
    
    
    
    app.listen(PORT,()=>{
        console.log(`Server is satrted at PORT ${PORT}`);
    })

}


ourServer()
