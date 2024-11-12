interface Project {
    image: string,
    title: string,
    tech: string,
    url: string,
    github: string
}


let projects: Project[] = [{image: "./Assets/Images/dotnet.png", title: "Basic ASP.NET Core API", tech: "C#, .NET Core, Dapper, MS SQL Server, Stored Procedures, Microsoft Azure, Postman", url: "https://docs.google.com/document/d/1RhdC7wZ4BMZsTNYVOJLXBdQ6SwDli8UQ9fVGbkM97so/edit?usp=sharing", github: "https://docs.google.com/document/d/1RhdC7wZ4BMZsTNYVOJLXBdQ6SwDli8UQ9fVGbkM97so/edit?usp=sharing"},{image: "./Assets/Images/gallery.png", title: "Art Gallery", tech: "JS, React, Art Institute of Chicago API, HTML/CSS", url: "https://stephanie01011011.github.io/gallerywebapp/", github: "https://github.com/Stephanie01011011/gallerywebapp"}, {image: "./Assets/Images/starwars.png", title: "Star Wars Adventure", tech: "Typescript, Materials UI, React, HTML, Star Wars API", url: "https://stephanie01011011.github.io/starwars/", github: "https://github.com/Stephanie01011011/starwars"}, 
    {image: "./Assets/Images/bookstore.png", title: "Book Store", tech: "Node.js, Express, React, HTML/CSS, Render", url: "https://stephanie01011011.github.io/fablefrontend/", github: "https://github.com/Stephanie01011011/fablefrontend"}, 
    {image: "./Assets/Images/workout.png", title: "Exercise Tracker", tech: "Node.js, Express, React, HTML/CSS, Render", url: "https://stephanie01011011.github.io/workoutlog-frontend/", github: "https://github.com/Stephanie01011011/workoutlog"}, 
    {image: "./Assets/Images/voyager.png", title: "Travel Booking Site", tech: "Typescript, Materials UI, React, HTML/CSS", url: "https://stephanie01011011.github.io/travelsite/", github: "https://github.com/Stephanie01011011/travelsite"},
    {image: "./Assets/Images/weather.png", title: "Weather App", tech: "JS, HTML/CSS, API Integration, React", url: "https://react-weather-api-steph.netlify.app/", github: "https://github.com/Stephanie01011011/react-weather"},
    {image: "./Assets/Images/todo.png", title: "To Do List", tech: "JS, React, HTML/CSS", url: "https://Stephanie01011011.github.io/ReactTodo", github: "https://github.com/Stephanie01011011/ReactTodo"},

]

export default projects;