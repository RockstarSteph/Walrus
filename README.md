# Walrus

## Project Description

Welcome to Walrus! You can browse a "pinterest-like" wall full of resources on a variety of topics from learning a foreign language to learning magic tricks. You can pin whatever resource inspires you and create your own to share with others. You can rate and leave comments on any of the resources on Walrus.

Please register for an account and log in to be able to use Walrus.

## Screen Shots

!["Screenshot of Main_Page"](docs/main_page.png)
!["Screenshot of Add_Resource_Page"](docs/add_resource.png)
!["Screenshot of My_Resource_Page"](docs/my_resource.png)
!["Screenshot of Comment_Rating_Page"](docs/comment_rating.png)
!["Screenshot of Profile_Page"](docs/profile.png)
!["Screenshot of Register"](docs/register.png)
!["Screenshot of Login"](docs/login.png)

## Running the App

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
4. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
    (You might want to do this multiple times to sucessfully insert data to the database)
5. Run the server: `npm run local`
6. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- body-parser: 1.15.2
- cookie-parser: 1.4.4
- dotenv: 2.0.0
- ejs: 2.4.1
- express: 4.13.4
- faker: 4.1.0
- jquery-bar-rating: 1.2.2
- knex: 0.11.7
- knex-logger: 0.1.0
- morgan: 1.7.0
- node-sass-middleware: 0.9.8
- pg: 6.0.2
