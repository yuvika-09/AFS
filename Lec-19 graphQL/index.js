import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Dummy Data
let users = [
  {
    id: 1,
    name: "Yuvika",
    email: "yuvika@gmail.com",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "abc",
    email: "abc.gmail.com",
    phone: 1234567890,
  },
  {
    id: 3,
    name: "xyz",
    email: "xyz.gmail.com",
    phone: 1234567890,
  },
];

let blogs = [
  {
    id: 1,
    title: "Blog-1",
    description: "My first Blog",
    date: "12-03-2026",
    userID: "1",
  },
  {
    id: 2,
    title: "Blog-2",
    description: "My second Blog",
    date: "13-03-2026",
    userID: "2",
  },
  {
    id: 3,
    title: "Blog-3",
    description: "My third Blog",
    date: "14-03-2026",
    userID: "3",
  },
];

// GraphQL Schema
const typeDefs = `#graphql

  type User {
    id: ID!
    name: String
    email: String
    phone: Int
    blogs: [Blog]
  }

  type Blog {
    id: ID!
    title: String
    description: String
    date: String
    userID: ID!
    user: User
  }

  type Query {
    getUsers: [User]
    getOneUser(_id: ID!): User
    getBlogs: [Blog]
    getBlogByID(_id: ID!): Blog
  }

  type Mutation {
    addUser(id: ID!, name: String, email: String, phone: Int): User
    deleteUser(id: ID!): [User]
    updateUser(id: ID!, name: String, email: String, phone: Int): User

    addBlog(id: ID!, title: String, description: String, date: String, userID: ID!): [Blog]
    deleteBlog(id: ID!): [Blog]
    updateBlog(id: ID!, title: String, description: String, date: String): Blog
  }

`;

// Resolvers
const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },

    getOneUser: (_, args) => {
      return users.find((u) => u.id == args._id);
    },

    getBlogs: () => {
      return blogs;
    },

    getBlogByID: (_, args) => {
      return blogs.find((b) => b.id == args._id);
    },
  },

  Mutation: {
    // User Mutations
    addUser: (_, args) => {
      const { id, name, email, phone } = args;

      const newUser = { id, name, email, phone };

      users.push(newUser);

      return newUser;
    },

    deleteUser: (_, args) => {
      const { id } = args;

      users = users.filter((u) => u.id != id);

      return users;
    },

    updateUser: (_, args) => {
      const { id, name, email, phone } = args;

      let user = users.find((u) => u.id == id);

      user.name = name;
      user.email = email;
      user.phone = phone;

      return user;
    },

    // Blog Mutations
    addBlog: (_, args) => {
  const { id, title, description, date, userID } = args;

  const newBlog = { id, title, description, date, userID };

  blogs.push(newBlog);

  return blogs;
},

    deleteBlog: (_, args) => {
      const { id } = args;

      blogs = blogs.filter((b) => b.id != id);

      return blogs;
    },

    updateBlog: (_, args) => {
      const { id, title, description, date } = args;

      let blog = blogs.find((b) => b.id == id);

      blog.title = title;
      blog.description = description;
      blog.date = date;

      return blog;
    },
  },

  User : {
    blogs : (parent, args) => {
    // parent gets the return value of parent resolver
    return blogs.filter((b) => b.userID == parent.id);
  }
},
Blog: {
  user: (parent) => {
    return users.find((u) => u.id == parent.userID);
  }
}
};

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start Server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);