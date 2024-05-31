const { typeDefs} = require("./typedef")
const {queries } = require("./query")
const {mutation } = require("./mutation")
const {resolvers} = require("./resolver")


exports.User = {
    typeDefs,
    queries,
    mutation,
    resolvers
}