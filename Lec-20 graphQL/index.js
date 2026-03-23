import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const Book = [
    {title: "chemistry by yuvika"},
    {title: "physics by yuvika"},
    {title: "maths by upasana aa"},
]

const Author = [
    {name: "yuvika"},
    {name: "upasana aa"},
]

const typeDefs = `
    union SearchResult = Book | Author

    type Book {
        title: String!
    }

    type Author {
        name: String!
    }

    type Query {
        search(contains: String): [SearchResult]
    }
`;

const resolvers = {
  SearchResult: {
    __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null; // GraphQLError is thrown
    },
  },

  Query: {
    search: (parent, args, context, info) => {
        let {contains} = args;
        contains = contains.toLowerCase();
        const books = Book.filter(book => book.title.includes(contains));
        const authors = Author.filter(author => author.name.includes(contains));
        return [...books, ...authors];
    }
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
