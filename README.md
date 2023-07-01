# phase-2-final-project-frontend

## Deployed link: https://blogs-on-hype.netlify.app/

## Hype -  Your Ultimate Blogging Platform!
HYPE is a cutting-edge blogging website built with ReactJS, offering a seamless and user-friendly experience. Whether you're a seasoned writer or a budding blogger, HYPE provides you with the perfect platform to share your thoughts, experiences, and passions with the world. Let your creativity flow and let HYPE be your canvas to express yourself and connect with like-minded individuals from all corners of the globe. Happy blogging!

## Features
- This is a CRUD application. It uses GET, POST, PUT/PATCH, DELETE requests for its functionality.
- User-friendly Interface: The app provides a clean and intuitive user interface, making it easy for users to read and create blog posts.
- Responsive Design: The app is fully responsive and works seamlessly on various devices, including desktops, tablets, and mobile phones.
- Create and Publish Blog Posts: Users can create, edit, and publish blog posts using a rich text editor.
- Search Functionality: Users can search for specific blog posts based on topic keywords.
- Image Uploads: Allow authors to upload images to include in their blog posts, enhancing the visual appeal of the content.
- Delete blogs - Users can also delete a blog by clicking on the DELETE button provided on each blog.
- Home - The HYPE logo acts the home button after users have finished reading a story.
- NOTE : Hype's backend instance, hosted on render.com's free tier service, requires a spin-up whenever it becomes inactive for some time. This is necessary to enable all CRUD functionality to work properly. The backend instance is accessible at the link https://json-server-2-i5l2.onrender.com/blogs. To ensure smooth operation of the website, it's essential to open the link at least once before using the website, as this will activate the backend instance and make the data available. Hype's blogs are stored in a db.json file deployed using render.com's free tier service. However, due to the limitations of the free tier, the data does not persist for an extended duration and reverts to the version pushed to the backend repo on Git.

## Technologies Used
- HTML, CSS, Javascript, and ReactJS were used to create the UI.
- Render.com is used to deploy my db.json which stores the blogs.
- Netlify.com was used to deploy my frontend.

## Getting started
- Clone the repository phase-2-final-project-frontend
- npm install the node module packages
- In your terminal, type command: npm start
- Once the application is loaded, you would be routed to Hype's homepage where you can view all the blogs.
- You can click on 'Read more' to read the full story.
- The backend server is already deployed on render.com. Link : https://json-server-2-i5l2.onrender.com/blogs
- This frontend is deployed on Netlify. Link: https://blogs-on-hype.netlify.app/

## Non-technical walkthrough video

## Acknowledgments
- This project was created as a learning exercise, and it would not have been possible without the resources and support of the following:
- Flatiron School community 
- Teachers and fellow students 
- The web development community on Stack Overflow and MDN Web Docs for providing helpful resources and insights

## License
This project is licensed under MIT license. Copyright (c) 2012-2023 Scott Chacon and others

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
