# CS465

## Architecture
For my full stack project, I worked with several types of frontend development, and each brought something unique to the table. Using Express HTML made it easy to serve up static pages and handle routing on the server side, which was great for getting the structure in place. Adding JavaScript allowed me to make those pages interactive, updating content in real-time without having to reload the page. The single-page application (SPA) approach, using [React/Angular], really brought everything together—it created a smooth, dynamic user experience by letting the page update content seamlessly while keeping navigation intuitive. Compared to the server-rendered pages, SPAs felt much faster and more responsive, and combining it with JavaScript made the app feel alive.

On the backend, I chose MongoDB as the database because of its flexibility and ability to scale. Unlike traditional relational databases, MongoDB’s JSON-like documents match naturally with the data structures on the frontend. This made moving data back and forth easier, and the schema-less design allowed me to make changes as my project evolved without needing complicated migrations.

## Functionality
JSON was a huge part of connecting the frontend and backend. While JavaScript handles the logic and user interactions in the browser, JSON is the format for sending structured data back and forth. For example, when a user submits a form, the frontend sends the information as a JSON object to the backend, which stores it in MongoDB, and then the backend sends JSON back so the frontend can update the interface dynamically.

During development, I found myself refactoring code to improve efficiency. I turned repeated UI elements into reusable components, which meant I didn’t have to rewrite code every time I needed a similar feature. This not only cleaned up the code but also made it easier to maintain and update the app, saving time and reducing errors.

## Testing
Testing in a full stack project involves more than just checking if things display correctly. I worked with various API endpoints, testing methods like GET, POST, PUT, and DELETE to make sure the data flowed correctly between frontend and backend. Security added another layer of complexity, especially around authentication and authorization. Testing meant ensuring that only authorized users could access certain data and that the endpoints handled requests safely. These practices reinforced my understanding of how methods, endpoints, and security all interact in a real-world full stack application.

## Reflection
This course has been incredibly valuable in helping me grow as a developer. I gained hands-on experience with both frontend and backend technologies—JavaScript, Express.js, [React/Angular], and MongoDB—and learned how to connect them through APIs and JSON. Beyond technical skills, I developed better problem-solving strategies, learned how to write cleaner, reusable code, and got experience testing applications thoroughly. All of these skills make me more confident and marketable as a software developer. Completing this full stack project has not only reinforced what I learned in the course but also given me practical experience I can carry into my career.
