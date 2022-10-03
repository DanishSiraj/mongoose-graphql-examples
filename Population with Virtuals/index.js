const mongoose = require('mongoose');
const path = require('path');
const {
  generateSchema,
  createGraphQLServer,
} = require('mongoose-graphql-server');
const PORT = process.env.port || 3000;

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

const init = async () => {
  // Register models
  require(path.join(__dirname, 'user.model.js'));
  require(path.join(__dirname, './post.model.js'));

  // Build the schema
  const schema = generateSchema(mongoose);

  // Create the graphQL server
  const app = await createGraphQLServer(schema);

  // Start the server
  app.listen(PORT, () => {
    console.log(`🚀🚀🚀 The server is running at http://localhost:${PORT}/`);
  });
};

db.once('open', init);
