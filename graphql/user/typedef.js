// typedef.js
const { queries } = require('./query');
const { mutation } = require('./mutation');

const typeDefs = `
  type Query {
    ${queries}
  }

  type Mutation {
    ${mutation}
  }

  # Define other types here if needed
`;

module.exports = { typeDefs };
