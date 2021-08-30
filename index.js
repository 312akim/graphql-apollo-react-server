const express = require('express')
const app = express();
const port = 4000

const { graphqlHTTP} = require('express-graphql');
const schema = require('./Schemas/index.js');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
