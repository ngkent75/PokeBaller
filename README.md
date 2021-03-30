# PokeBaller

## Table of Contents

* [Description](#description)
* [Usage](#usage)
* [Credit](#credit)
* [Criteria](#criteria)
* [Questions](#questions)

## Description

PokeBaller is a webapp to help manage your own personalize digital pokemon collection. You can search up any pokemon by name and add them to your collection. You can then view your entire collection, and delete cards that you don't want anymore.

```md
AS A Pokemon card collector,
I WANT to have a digital tool to identify what Pokemon cards I have and do not have & their properties, 
SO THAT I can organize my plans for buying and trading to get new cards.

```

## Usage

To access the repo, go to https://github.com/ngkent75/14-MVCTechBlog

To access on Heroku, go to https://rocky-mesa-92551.herokuapp.com/login


1. Upon accessing the website, you will immediately see the homepage.

![Home](./assets/home.PNG)

2. From the home page, clicking on any link other than the home link will redirect you to the login page.
3. While on the login screen, you can sign up and be directed towards a page that allows you to create or delete a blog post.
4. Creating a blog post will make it generate on the homepage.
5. On the homepage, you will see a list of all posts, who created them, and when they were posted.
6. Clicking on a post redirects you to a page that shows the contents of the post. There is a comment box, but that has not been fully implemented yet so it won't work.
7. After signing up, you can come back later and sign in anytime.

Your README should look something like this:


## Credit

Markdown documentation: https://guides.github.com/features/mastering-markdown/#syntax

bcrypt: https://www.npmjs.com/package/bcrypt

connect-session-sequelize: https://www.npmjs.com/package/connect-session-sequelize

dotenv: https://www.npmjs.com/package/dotenv

express: https://www.npmjs.com/package/express

express-handlebars: https://www.npmjs.com/package/express-handlebars

express-session: https://www.npmjs.com/package/express-session

mysql2: https://www.npmjs.com/package/mysql2

sequelize: https://www.npmjs.com/package/sequelize

## Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```


## Questions
Have any questions? Feel free to reach out.

GitHub: [ngkent75](https://github.com/ngkent75)

Email: [ngkent75@gmail.com](mailto:ngkent75@gmail.com)
