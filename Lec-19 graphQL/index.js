import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import jwt from "jsonwebtoken";
let secretKey = "secret123";

// Dummy Data
let users = [
  {
    id: 1,
    name: "Yuvika",
    email: "yuvika@gmail.com",
    password: "123",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "abc",
    email: "abc.gmail.com",
    password: "123",
    phone: 1234567890,
  },
  {
    id: 3,
    name: "xyz",
    email: "xyz.gmail.com",
    password: "123",
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

  type LoginResponse {
    message: String
    token: String
  }

  type addBlogResponse {
    message: String
    data: Blog
  }

  type User {
    id: ID!
    name: String
    email: String
    phone: Int
    password: String
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

    addBlog(id: ID!, title: String, description: String, date: String, userID: ID!): addBlogResponse
    deleteBlog(id: ID!): [Blog]
    updateBlog(id: ID!, title: String, description: String, date: String): Blog
    login(email: String, password: String): LoginResponse
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
    login: (parent,args) => {
      /**
       * {email, pswd} = args
       * if email exist?
       *     No -> please register 
       *     Yes 
       *         check pswd
       *               No -> wrong pswd 
       *              Yes -> create token and return 
       */
      const { email, password } = args;
      const user = users.find((u) => u.email == email);
      if(!user) {
        return {message : "Email does not exist", token : null};
      }
      if (user.password !== password) {
        return {message : "Incorrect password", token : null};
      }
      let token = jwt.sign({ id: user.id}, secretKey);
      return {
        message : "Login successful",
        token
      };
    },

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
    addBlog: (_, args,context) => {
      let {userID} = context;
      if(!userID) return {
        message : context.message,
        data : null
      }
  const { id, title, description, date} = args;
  const newBlog = { id, title, description, date, userID};

  blogs.push(newBlog);

  return {
    message : "Blog added successfully",
    data : blogs[blogs.length - 1]
  };
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
    }
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
  context : ({req}) => {
    let token = req.headers.authorization;
    if(!token) {
      return {
        message: "user not logged in",
        userID: null
      };
    }
    try {
      let decode = jwt.verify(token, secretKey); 
      if(!decode) return {message: "Invalid token", userID: null};
      return {
        message: "user logged in",
        userID: decode.id
      };
    }
    catch(error) {
      console.log(error.message);
      return {
        message : "internal server error",
        userID: null
      }
    }
  }
});

console.log(`Server ready at: ${url}`);