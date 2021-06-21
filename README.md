# 14-MVC-Tech-Blog
 #### Model View Controller assignment deployed to Heroku
 [Link to Heroku](https://tech-blog-01.herokuapp.com/)


## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Project Outline

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
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```


## Installation

- packages need to be installed such as 
- node.js
- npm i 
- mysql

## Usage

This is an application called Tech Blog. Where developers can blog about opinions on technology and coding, and get comments from other developers perspectives.

## Tests

No Test for this application.

## Screenshots of Application

Homepage
<img width="1214" alt="Screen Shot 2021-06-20 at 6 28 47 PM" src="https://user-images.githubusercontent.com/79430431/122696286-9c0a9a80-d1f7-11eb-8d5a-9e2c82bdc2a5.png">

Dashboard
<img width="1214" alt="Screen Shot 2021-06-20 at 6 29 13 PM" src="https://user-images.githubusercontent.com/79430431/122696297-a331a880-d1f7-11eb-8b73-7c18d53480ef.png">

Create a new post while logged in 
<img width="1214" alt="Screen Shot 2021-06-20 at 6 31 04 PM" src="https://user-images.githubusercontent.com/79430431/122696302-a62c9900-d1f7-11eb-9eb7-477f467b4fe6.png">

Once your post is created it will post it in your Dashboard
<img width="1214" alt="Screen Shot 2021-06-20 at 6 31 23 PM" src="https://user-images.githubusercontent.com/79430431/122696307-a88ef300-d1f7-11eb-9675-2b5185f6a9be.png">

Edit a Post while logged in or Delete a Post
<img width="1214" alt="Screen Shot 2021-06-20 at 6 39 05 PM" src="https://user-images.githubusercontent.com/79430431/122696314-aa58b680-d1f7-11eb-94d0-6cc4138958c4.png">

while in Homepage, the option to make a comment to a post is available
<img width="1214" alt="Screen Shot 2021-06-20 at 6 39 30 PM" src="https://user-images.githubusercontent.com/79430431/122696322-adec3d80-d1f7-11eb-9fb9-aaa7de36eb11.png">


## Important Links

[Github](https://github.com/vbarajas4/14-MVC-Tech-Blog)

 
## Framework, Technologies, packages

- VS Code App
- express node.js 
- MySql2
- bcrypt
- sequelize
- express-handlebars
- express-session
- express-session-sequelize

## Contributing
This project is not accepting contributors at this moment.

## License
![badge](https://img.shields.io/badge/license-MIT-yellow)
##### This application is licensed under the [MIT]([Link ](https://opensource.org/licenses/MIT)) license.
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Questions
 * GitHub: [vbarajas4](https://github.com/vbarajas4)
 * Email: [vbarajas4@gmail.com](mailto:vbarajas4@gmail.com)

