# MySQL Burger Express

### This is fully functional now. Once deployed to Heroku cloud environment it will be viewable here:
   * <https://alane019.github.io/mysql-burger-express/>
 
[//]: # (markdown comment:  https://alane019.github.io/mysql-burger-express/  )

  This hamburger-themed project serves as a demonstration of the MVC design pattern, using Node.js runtime, MySQL database, and Express.js web server. Handlebars is used as the html templating engine for the view portion of the project. In addition, this project demonstrates deployment of a full stack web application to a Heroku cloud environment. However, if you have Node.js installed on your operating system, you can follow the simple installation steps below to preview the application by navigating to <http://localhost:8080> in a web browser once Node is used to run the server.js file, which allows the web server to begin listening for web requests at the specified port on localhost (again, 8080 is default, but that can be adjusted in the connection.js file, within the config directory).

  ![screenshot.png](https://raw.githubusercontent.com/alane019/mysql-burger-express/main/public/assets/images/screenshot.PNG)

 # Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Deployment](#Deployment)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Other](#Other)

 ## Installation
  Navigate to the root directory for this project in your terminal of choice, then install the required packages with `npm install`. Run **schema.sql** to create the database, then run **seed.sql** to load the initial data.

 ## Usage
  To run the application, after installing required packages using your npm in your terminal, type `node server` in the root directory of this project.

 ## Deployment
  ### Heroku deployment notes
  * Create heroku project with existing git repository: 
       ` heroku create  `
  * Push to remote heroku server: ` git push heroku main `
  * Show logs: ` heroku logs -t `
  * Environment var configuration: `heroku config   `
  * Heroku CLI quick-reference: <https://devhints.io/heroku>


 ## Contributing
  Contributions are welcome. Submit a pull request or open an issue if you would like make improvements.

 ## License
  GNU GENERAL PUBLIC LICENSE:  <https://www.gnu.org/licenses/gpl-3.0.txt>
 
  Learn more at <http://gnugpl.org/>

## Other
 * Node.js development is fun. 
 * Learning the fundamentals of the MVC paradigm while learning asychronous JS callback functions takes time and attention.
 
