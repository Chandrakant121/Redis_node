<!-- 

1] Why do we need server ?
Ans:
    React app is running in user computer but we can not store all user data 
in all users computer that's why we need a central storage where we can store 
all data.
    When user needs data he send req to server then server process the req and 
send back response to user 


2] what is diff bet library and framework ?
Ans:
   Library:
        A library is a collection of pre-written code that can be used by a program.
It provides a set of functions or routines that can be called by an application to perform specific tasks. Libraries are typically designed to be reusable and can be used in various projects. When you use a library, you are in control of the flow of your program, and you decide when and how to call the library functions. ex. React

   Framework: 
         A framework, on the other hand, is a more comprehensive and structured 
set of tools, libraries, and conventions designed to help developers build applications. It provides a skeleton or a foundation for developing software. In a framework, the flow of control is often inverted compared to libraries – the framework calls the developer's code rather than the other way around. The developer fills in the details or customizes the framework to create a complete application.
        ex. Express is node framework, nestjs is nodejs framework.

        nestjs is framework but when we installed axios that is library.
Library control is in developers hand but in case of framework we can
not decide when to run the jsx code and how to display.


3] what is modules ?
Ans:
       In Node.js, Logical seperations of your code. modules are a way to organize 
and encapsulate code in separate files. 
       They allow you to break down your code into smaller, reusable pieces, which can 
improve maintainability and encourage a modular design.


4] types of modules ?
Ans :
   A] Core Modules : 
            They are inbuilt modules which builds inside node. we can directly use. 
    ex path modules. Comes with installation of node.

   B] Third party modules / npm packages :
             The modules which are installed from npm i that are third party modules.

   C] User generated modules : 
             Whatever modules we are creating for our project that are User 
    generated modules.


5] what is file and module ?
Ans:
    Suppose we have 10 functions in file but we are exporting 2 fnctions then that 
2 functions are the part of modules and that file is a module.    
    What we are exporting from that file that is module.

6] What is express ?
Ans:
    Express.js is node js framework. It is designed to make it easier to build 
    web applications and APIs by providing a set of features and tools for handling 
    various aspects of web development.

    Unopionionated means express can not have any folder structure. we can write 
    code anywhere (Any Module) just need correct syntax.

    Express always looks for a method and route.
    Method :- Get, Post
    Route :- endpoint ex. http://localhost:3000/user 
             /user is route

    Key features of Express.js include:

    1] Routing: 
        Express allows us to define routes for handling different HTTP methods (GET, POST, etc.) 
    and URLs.

    2] Middleware: 
        Middleware functions can be used to perform tasks in the request-response cycle, 
    such as logging, authentication, and error handling.

    3] Template Engines: 
        Express supports various template engines (like EJS, Pug, and Handlebars) to 
    dynamically generate HTML on the server.

    4] Static File Serving: 
        Express can serve static files (CSS, images, JavaScript) easily.

    5] Integration with Other Libraries: 
        Express can be easily integrated with other Node.js libraries and modules.

    
        Here's a simple example of a basic Express.js server:

          const express = require('express');
          const app = express();
          const port = 3000;

          app.get('/', (req, res) => {
          res.send('Hello, World!');
          });

          app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`);
          });

7] What are dependencies ?
Ans :
    In Node.js, the package.json file is a manifest file that contains metadata about a Node.js project, such as its name, version, description, and dependencies. Dependencies in the package.json file refer to external Node.js modules or packages that your project relies on. These dependencies are essential for your project to run correctly, as they provide functionalities that your code may use.


A] Dependencies (dependencies): 
    These are the packages required for your application to run in production. When someone installs your project, these dependencies will be installed automatically.

B] DevDependencies (devDependencies): 
    These are packages that are only needed during development, such as testing frameworks, build tools, and linters. They are not necessary for the production environment, and users who install your project for production purposes won't install these dependencies by default.


8] What is default export ?
Ans:
    The functions exported without object that are default export
    Ex. 
         function hello(){}
         module.exports = hello

         const bye = require('./')
         const bye is any name in default export

    For multiple export use object.
    Ex. module.exports = { hello }
    
                      ** Module.exports is empty object. **


9] What is named export ?
Ans :
     When we are exporting fun in object then it is named exports. key must be same when importing in other files or modules.

     Ex. module.exports = { hello }
         const { hello } = require('./)


10] How to add fun, key in empty object ?
Ans:
    module.exports.hello = hello
    module.exports["hello"] = hello

           ** String is passed by value but Objects are passed by reference. **

           

11] Middleware ?
Ans:
   Middleware is something that runs before the request hits our function 
   that handles the request (commonly called route handlers ) and after 
   the response it is sent from the route handler.

   Middleware is function which have three arguments req, res, and next.
   pass middleware in app.use()
   If we are not passing middleware in app.use then it is normal function
Ex.

const express = require('express')
const app = express()
const PORT = 5000

app.use(middleware)

app.get('/users', (req, res) => {
    return res.send({ route: "/users" })
})
function middleware(req, res, next) {
    console.log("Before route handler")
    next()
}
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

If we are not using next() in middleware then our req will stuck in middleware
our express do not know what to do.


12] Global Middleware
Ans:
    middleware that is defined in app.use will run for all routes so a
    middleware like logger is a good example for it and you can also use 
    middleware for selected routes by passing middleware function as the 
    second argument to the function for 
e.g :-
  app.get("/", logger, function (req, res) { console.log("hello"); });
  we can also pass multiple middlewares by passing them as an array
  app.get("/", [logger, logger], function (req, res) { console.log("hello"); });

Please Note :-
  route handlers app.get and app.post are also middlewares so if they are
  places above the app.use in our file then they will get executed first
  and middleware will not run as generally route handlers don't have a next().

Parsing Request Body :-
   For parsing request body we can do app.use(express.json()) middleware
   and it should be placed above the requests that we will handle.


13] REST APIs ?
Ans:
   REST => Representational State Transfer.
           Get, Post, Put/patch, delete. 

14] what is mongoDB ?
Ans:
   MongoDB is a popular open-source NoSQL database management system that stores data in flexible, JSON-like documents, known as BSON (Binary JSON). It is designed for scalability, flexibility, and high performance.

   In NOSQL we have collections and in each collection we have documents in json formate. In SQL we have tables and rows.

   ex. student is collection and one student having name, number etc these are documents.

   For storing data NoSql is faster but for fetching data SQL is faster.

   Ex. cloths storing in columns. storing cloths in unproper manner in one column is easy but finding is not easy. Now storing paints and shirts in different column is not easy but finding is easy.

   Advantages:

   A] Document-Oriented: MongoDB stores data in flexible, JSON-like documents, allowing for a dynamic and schema-less data model.

   B] NoSQL Database: It falls into the category of NoSQL databases, which means it doesn't rely on the traditional relational database structure and uses a variety of data models.

   C] Scalability: MongoDB can scale horizontally across multiple servers, making it suitable for handling large amounts of data and high traffic.

   D] High Performance: It is designed for fast and efficient data retrieval, with support for indexing and various optimization techniques.

   E] Aggregation Framework: MongoDB provides a powerful aggregation framework for performing complex data transformations and analysis.

   F] Ad Hoc Queries: Users can perform dynamic queries on documents using a rich set of operators, making it easy to retrieve and manipulate data.

   G] Open Source: MongoDB is open-source and has a large community, which contributes to its ongoing development and support.

   H] Cross-Platform Compatibility: MongoDB is available for various platforms, including Windows, Linux, and macOS.

   MongoDB is commonly used in modern web development, especially in situations where the flexibility of a schema-less database is beneficial or in applications requiring the handling of large volumes of unstructured or semi-structured data.

   When more insert operations are and need more flexibility then use mongoDB.
   When you are using transcations, more read operations in database and no need for a flexibility in database.

   When there are more insert operations and the need for greater flexibility, MongoDB is a suitable choice. However, in scenarios involving transactions, a higher volume of read operations, and when flexibility in the database structure is not a primary requirement, alternative database solutions may be considered.

 15] JSON vs Object ?
 Ans:

JSON =>
     JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
     
     It is represented as a string and is often used to transmit data between a server and a web browser.
     
     JSON uses key-value pairs and supports various data types like strings, numbers, objects, arrays, booleans, and null.

      {
        "name": "John Doe",
        "age": 30,
        "city": "Anytown",
        "isStudent": false,
        "courses": ["Math", "History", "English"],
        "address": {
        "street": "123 Main St",
        "zip": "12345"
        }
      }

OBbject =>
     An object is a fundamental data structure in programming languages like JavaScript.
     
     It is a collection of key-value pairs where the keys are strings, and the values can be of various data types, including other objects.

     const person = {
                    name: "John Doe",
                    age: 30,
                    city: "Anytown",
                    isStudent: false,
                    courses: ["Math", "History", "English"],
                    address: {
                      street: "123 Main St",
                      zip: "12345"
                    }
                  };

     console.log(person.name);  // Accessing a property of the object
     console.log(person.address.zip);  // Accessing a nested property

16] put vs patch ?
Ans:
    PUT: 
       Used to update or create a resource. It replaces the entire resource or creates a new one if it doesn't exist.

    PATCH: 
       Used to partially update a resource. It applies changes to the existing resource without replacing the entire content.

17] mongoshell cmd.
Ans:
   Start mongo => ./mongo
   Show all db => db
   Drop db => db.dropDatabase()
   Create db => use test (db name)
   Create collection => db.createCollectin('students')
   Show collection => show collections
   Create document => db.students.insert({"name":"chandu", "surname":"Joshi"})
   Read document => db.student.find()
   Create many documebt => db.students.insertMany([{"name":"rahul"}, {"name":"sachin"}])
   For proper syntax => db.student.find({}).pretty()
   Find single document with name, age etc => db.student.find({"age":22}).pretty()
   Find by Id => db.student.find({"_id": ObjectId("659e6895ed7e3bac6b843929")}).pretty()
   Updating document =>  db.student.update({"name":"sohame"},{$set:{"age":25}})
                         db.student.update({"_id":  ObjectId("659e6895ed7e3bac6b843928")},{$set:{"surname":"Dafane"}})

     If we are not using set in update then only updating field (Replaced)set and old one is deleted from document.

     Remove => db.student.remove({"_id": ObjectId("659e669bed7e3bac6b843923")})

     Remove only one field from document => 
            db.student.update({"_id":ObjectId("659e6895ed7e3bac6b843928")},{$unset:{"surname":"Dafane"}})
    
    For help => db.student.help()

                     ===================== Operators  =====================

    Equal to Operator     =>  db.student.find({"age":{$eq:25}}).pretty()
    Not equal to Operator => db.student.find({"age":{$ne:25}}).pretty()
    Less than             => db.student.find({"age":{$lt:25}}).pretty()
    Less than equal to    => db.student.find({"age":{$lte:25}}).pretty()
    Greater than          => db.student.find({"age":{$gt:22}}).pretty() 
    Greater than equal to => db.student.find({"age":{$gte:22}}).pretty()
    count the documents   => db.student.count()


                     ===================== Advance Mongo  =====================

    More then one condition =>db.users.find({$and:[{gender:"Male"},{id:{$lt:20}}]}).pretty()
                            =>db.users.find({$and:[{gender:"Female"},{id:{$gte:20}}]}).pretty()                 
                            =>db.users.find({$or:[{gender:"Male"},{$id:{$lt:20}}]}).pretty()
                            =>db.users.find({$or:[{gender:"Male"},{$id:{$lte:20}}]}).pretty()
    Not Operator            =>db.users.find({gender:{$not:{$eq:"Female"}}}).pretty()
                            =>db.users.find({id:{$not:{$lte:20}}}).pretty()
                            =>db.users.find({id:{$not:{$gt:10}}}).pretty()
                            =>db.users.find({gender:{$not:{$eq:"Male"}}}).pretty()
    !includes conditions    =>db.users.find({$nor:[{gender:"Male"},{id:{$gte:20}}]}).pretty()
                            =>return Neither male and less than 20
    In Operator             =>db.users.find({id:{$in:[1,2,3,4,5]}}).pretty()
                            =>db.users.find({gender:{$in:["Male"]}}).pretty()
                            =>db.users.find({email:{$in:["aishchenko1k@thetimes.co.uk"]}}).pretty()
                        
18] what is collection ?
Ans:
   One collection has many document.
   ex. user is collection and name, address are the documents in collection.

19] what is await ?
Ans:
   The await keyword is used in JavaScript, particularly with the async keyword, to handle asynchronous operations in a synchronous-looking manner. When placed before a promise or an asynchronous function, await pauses the execution of the function until the Promise is resolved, and then it returns the resolved value.
   
Nosql => used when the lots of post and update req not read req.
sql   => used when the lots of read req.


20] relationships ?
Ans =>
    One to One => one post can be written by one person. (dependent independent)
    One to Many => one person create many post.

    // add dependent document id into independent document.

    One to One => one user can be a one student. (dependent independent)

    stackoverflow
    Many to Many => One Q have many tag and one tag belongs to many Q.
                 => Both are dependent they are siblings.
                 => now if we are adding Q id in tag then a lots of Q belongs to single tag its not efficient way. Now in other way max 4 to 5 tags belongs to single Q so it is efficint to add Tag id in Qestion document or Schema.
                 => Add tag id in Questions.

    MVC=>
      Models => Handle business logic 

21] validations ?
 Ans =>
     validations are used to validate post form fields to ensure that whatever we need is present in the way we want it to be present and even though you guys are used to doing frontend validations but still validations must be performed on backend also as frontend code is available inside browser and user might modify it to bypass our validations hence backend validation is required
     also remember to add validations to your database schema so that you have an additional layer of protection but you should never default to database validations.
     we will use express-validator and documentation for the same is available at Express Validator.

     We have to add validations before going req to database beacuse it affects on the performance.

    npm install express-validator

    In the front end we can implement the validations but the frontend code is visible to user so might be possible that he will do something forcfully so it is good to add validations in backend.

    validations written at route handler level or API level.

    Method Chain => when we are adding one method in front of other then it is known as method chain.

    If we are not adding validations at rote level then mongoDB will throw err if anything is wrong

22] multer ?
Ans
    Multer is a function and every function in js is object.
    Non primitive data types in js are objects fun and array.
    Non primitive data types are pass by reference

    Primitive data types are string, int and float.
    They passed by value. 

23] Authentication and authorisation ?
Ans
   verifying the user with db is authentication. 
   In authorization we are checking what routes user can handle that is authorisation

24] Redis ?
ans
   Redis is server level caching. It stores frequently accessed data. Store data in obj form.
   It is a tool for storing data in cache. Redis in noSQL database.  
   AWS redis(Elasticache). Memcache is similar to redis.
   
   Redis Install Process

   WSL On window
   wsl --install
   wsl --install -d Ubuntu
   sudo apt-get update
   sudo apt-get install redis

   Redis cmd
   redis-server
   redis-cli
   KEYS *
   GET todos
   DEL todos
   DEL key1 key2 key3
-->