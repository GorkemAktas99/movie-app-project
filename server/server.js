const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config();
//MongoDB
const db = require('./helpers/db')();


app.use('/graphql',expressGraphQL({
    schema: schema,
    graphiql: true
}));
app.listen(5000,()=>{
    console.log('Server is running');
});