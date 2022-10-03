const mongoose = require('mongoose');
const {
  generateSchema,
  createGraphQLServer,
} = require('mongoose-graphql-server');
const PORT = process.env.port || 3000;

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

const init = async () => {

// Register models 
const Cat = mongoose.model('Cat', { name: String });
// Build the schema
const schema = generateSchema(mongoose);

// Create the graphQL server
const app = await createGraphQLServer(schema);

app.get("/",(req,res) => {
res.send(`GrahpQL running on http://localhost:${PORT}/graphql`);
})

// Start the server
app.listen(PORT, () => {
      console.log(`🚀🚀🚀 The server is running at http://localhost:${PORT}/`);
});

}

db.once('open',init);