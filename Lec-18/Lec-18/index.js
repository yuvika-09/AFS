import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { use } from "react";
let users = [
    {
        id: 1,
        name: "Vishakha",
        email: "vish123@gmail.com",
        phone: 1234567890
    },
    {
        id: 2,
        name: "abc",
        email: "abc.gmail.com",
        phone: 1234567890
    },
    {
      id:3,
      name:"xyz",
      email:"xyz.gmail.com",
      phone:1234567890
    }
]

let blogs=[
  {
    id:1,
    title:"Blog-1",
    description:"My first Blog",
    date:"12-03-2026"
  },
  {
    id:2,
    title:"Blog-2",
    description:"My second Blog",
    date:"13-03-2026"
  }
]
const typeDefs = `
#graphql
#User  ==> comment

  type User {
    id: ID!,  #! means it is a required field cant be null
               #ID serialized into string
    name: String,
    email: String
    phone: Int

  }
    type Blog{
    id:ID!,
    title:String,
    description:String,
    date:String
    }
    type Query {
    getUsers: [User],
    getOneUser (_id: ID!): User
    getBlogs:[Blog]
    getBlogByID(_id:ID!):Blog
}
    # User Mutation 
    type Mutation{
    addUser(id: ID!, name: String, email: String, phone: Int):User
     deleteUser(id: ID!):[User]
     updateUser(id:ID!,name:String,email:String,phone:Int):[User]
    }
     #Blog Mutation
     type Mutation{
     addBlog(id:ID!,title:String,description:String,date:String):[Blog]
     deleteBlog(id:ID!):[Blog]
     updateBlog(id:ID!,title:String,description:String,date:String):Blog
     
     }
   
`;
const resolvers = {
  Query: {
    getUsers: () => {
        return users;
        },
        //In resolver we have 4 arguments --> parent,args,context,info-->optional..
        //args are objects which contain all the input==> user information

    getOneUser: (_,args)=>{
            return users.find((u)=>u.id==args._id);
        }
    },
    //User Mutation
    Mutation:{
      addUser:(_,args) => {
        //args-> id,name,email,phone
        let {id,name,email,phone}=args;
        //add this new user to database
        let newUser={
          id:id,
          name:name,
          email:email,
          phone:phone
        }
        users.push(newUser);
        return newUser;
      },
      deleteUser:(_,args)=>{
       let {id}=args;
       users=users.filter((u)=>u.id!=id);
        return users;
      },
      //update user
      updateUser:(_,args)=>{
        let {id,name,email,phone}=args;
        let updateUser=users.find((u)=>u.id==id);
        updateUser.name=name;
        updateUser.email=email;
        updateUser.phone=phone;
        return updateUser;
      }
    },

    //Blog Mutation
    Mutation:{
      addBlog:(_,args)=>{
        let {id,title,description,date}=args;
        let newBlog={
          id:id,
          title:title,
          description:description,
          date:date
        }
        blogs.push(newBlog);
        return blogs;
      },
      deleteBlog:(_,args)=>{
        let {id}=args;
        blogs=blogs.filter((b)=>b.id!=id);
        return blogs;
      },
      updateBlog:(_,args)=>{
        let {id,title,description,date}=args;
        let updateBlog=blogs.find((b)=>b.id==id);
          updateBlog.title=title;
          updateBlog.description=description;
          updateBlog.date=date;
          return updateBlog;
        }
      }
    
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(` Server ready at: ${url}`);

//HW= create new entity BLOG= define type -- id,title,description, date.
// query-> getBlogs: [Blog]
// getBlogByID: Blog
// mutation-> addBlog, deleteBLog,updateBlog
//resolver-> 