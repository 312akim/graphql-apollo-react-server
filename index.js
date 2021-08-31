const express = require('express')
const app = express();
const port = 4000
const cors = require('cors')

const { graphqlHTTP} = require('express-graphql');
const schema = require('./Schemas/index.js');

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
