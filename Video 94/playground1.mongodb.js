
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "Python",
        "Price": 15000,
        "Instructor": "Alice"
    },
    {
        "name": "JavaScript",
        "Price": 18000,
        "Instructor": "Bob"
    },
    {
        "name": "C++",
        "Price": 22000,
        "instructor": "Charlie"
    },
    {
        "name": "Ruby",
        "Price": 17000,
        "instructor": "David"
    },
    {
        "name": "C#",
        "Price": 19000,
        "instructor": "Eva"
    },
    {
        "name": "Swift",
        "Price": 21000,
        "instructor": "Frank"
    },
    {
        "name": "Kotlin",
        "Price": 16000,
        "instructor": "Grace"
    },
    {
        "name": "PHP",
        "Price": 23000,
        "instructor": "Hank"
    },
    {
        "name": "TypeScript",
        "Price": 20000,
        "instructor": "Ivy"
    },
    {
        "name": "Go",
        "Price": 18000,
        "instructor": "Jack"
    }
  ]);

// Print a message to the output window.
console.log("Done inserting data");
