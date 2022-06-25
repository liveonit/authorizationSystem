module.exports = {
  client: {
    includes: [__dirname+'src/graphql/gql/**/*.{graphql,gql}'],
    service: {
      name: "schema",
      url: "http://localhost/graphql"
    },
  }
};
