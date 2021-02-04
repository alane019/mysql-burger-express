# MySQL Burger Express

#### Deployed to Heroku envionment → <https://mysql-burger-express.herokuapp.com/>
 
[//]: # (markdown comment:  https://alane019.github.io/mysql-burger-express/  )

  This hamburger-themed project serves as a demonstration of the [MVC](https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really) design pattern, using [Node.js](https://nodejs.org/en/about/), an [Express](http://expressjs.com/) web server, [MySQL](https://dev.mysql.com/downloads/mysql/) database, and [Handlebars](https://handlebarsjs.com/guide/) is used as the templating engine for the view portion of the project. In addition, this project demonstrates deployment of a full stack web application to a [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true) cloud environment. 
  
  If you have Node and a MySQL database installed on your operating system, you can follow the simple installation steps below to view the web page in a browser using [localhost](https://www.ionos.com/digitalguide/server/know-how/localhost/). The installation and usage sections below explain how to use Node to run the server.js file, which starts the Express web server, which will begin listening for requests on the specified port on localhost (Port 8080 is default, but that can be adjusted in the connection.js file, within the config directory of this project). 

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
 
