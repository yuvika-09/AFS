import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let users = [
    {
        id : "1",
        name : "Yuvika",
        email : "y@gmail.com",
        phone : 99999
    },
    {
        id : "2",
        name : "Upasana",
        email : "u@gmail.com",
        phone : 99999
    },
    {
        id : "3",
        name : "Samiya",
        email : "s@gmail.com",
        phone : 99999
    },
]

const typeDefs = `
    #User => comments  
    #to write multiple lines of code, use backticks 
    #use ! to define property as NOT NULL

    type User {
    id : ID!,  #ID serialized into String
    name : String, 
    email : String,
    phone : Int
    }

    type Query {
        getUsers : [User],
        getOneUser(id : ID!) : User
    }

    #mutation
`

const resolvers = {
    // we need to tell we are writing resolver for query or for mutation
    Query : {
        getUsers : () => {
            // db call
            return users;
        },
        // in resolvers we have 4 arguments -> parent,args,context,info (in order) -> optional
        // args : object which contain all the input => getOneUser(name,email,id)
        getOneUser : (_,args) => {
            return users.find((u) => u.id == args.id);
        }
    }

    // Mutation : {}
}



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`Server ready at: ${url}`);
