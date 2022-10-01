const mongoose = require('mongoose');
const {connectDatabases} = require('./utils/connections');
const {
  generateSchema,
  createGraphQLServer,
} = require('mongoose-graphql-server');
const PORT = process.env.port || 3000;

connectDatabases().then(async () => {
  try {
    const userModel = require('./models/user.model');
    const commentModel = require('./models/comment.model');
    const postModel = require('./models/post.model');

    const schema = generateSchema(mongoose);
    const app = await createGraphQLServer(schema);

    app.listen(PORT, () => {
      console.log(`🚀🚀🚀 The server is running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
});
