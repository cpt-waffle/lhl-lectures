## Final Project Kickoff

[slides](https://docs.google.com/presentation/d/13LWoqYw_8lR6yXfW6-qUjCsn3DRt4a3Hjq1Xkd8iz9k/)

This will be alot of reviews from midterms.

### User Stories

![user stories](https://cdn.tiempodev.com/wp-content/uploads/2020/07/21110014/writing-a-good-user-story-01.jpg)

First thing you will do is write a a few user stories for your project following these formats:

```
As a _________________ ,
I want to ____________ ,
Because ______________ . 
```

OR

```
Given ______________________ ,
When _______________________ ,
Then  ______________________ .
```

OR

```
As a __________________________ ,
I should be able to____________ ,
Because _______________________ .
```

[Here are some examples that we can use from tiny app.](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/example-user-stories.md)

Once your user stories, everything will branch out from them.


### ERDs

![ERDS](https://www.guru99.com/images/1/100518_0621_ERDiagramTu1.png)

ERD will branch out of your user stories by giving you hint 
on what tables you will have. Remember: Tables are nouns

Example:

```
As a user I want to be able to create short urls
by adding long url and app generating a short url
```

```
Users ------ has many ------ Urls
```

Use ERD tools such as:

- [Draw.io](https://app.diagrams.net/)
- [Visual Paradigm](https://online.visual-paradigm.com/diagrams/solutions/free-erd-tool/)


### Tech Choices

By this step you would usually deside on the tech stack and the reasons why
would use that tech stack. Each langauge has its pros and cons and every project
should be thought througly of why you are choosing these specific languages, frameworks,
and database. 

You have free choices for the tech stack however, if you are going to change to a new 
langauge, framework, etc, please only change 1 thing about your stack, and keep the rest
as what you already know.

Example: 

```
Frontend  - Vue
Backend   - Node
Database  - PSQL


or 

Frontend  - React
Backend   - Node
Database  - MongoDB ( NO SQL )
```


### Routes 

No matter the tech stack, your app will have routes that will give data to the user. 
It could be a form of a views or it could be a form of data ( api ). Start thinking 
of some of the routes that you may have in your app. Again user stories will help you 
out here.

```
As a user I want to be able to create short urls
by adding long url and app generating a short url
```

```
GET   /urls/new      # a page where it displays a form
POST  /urls          # to save a new url
GET   /urls          # to see all the urls    
```

### Wireframes

![wireframes](https://cdn-images.visual-paradigm.com/handbooks/agile-handbook/wireframe/01-youtube-wireframe-example.png)

Wireframes will help you with a site layout. Keep in mind that you are just using wireframes
to show your layout for page elements. No color or theme is needed at this page. Remember: 

- A page does not need to have every UI element on it ( split your features )
- dont be over ambiguous in your wireframes ( Notifcations box ??)

You can use the following tools to make some wireframes:

 - [Draw.io](https://app.diagrams.net/)
 - [Figma](https://www.figma.com/)

 __NOTE__: Figma may be an overkill for this BUT its a great to learn about design and is widely 
 used to create amazing UI mockups.

Once you have your wireframes, you will be able to do storyboarding

### Storyboarding

![storyboard](https://image.slidesharecdn.com/app-storyboard-120726105231-phpapp02/95/app-storyboard-1-728.jpg?cb=1343299984)

Put your wireframes in an order that represents a user story.

- user opens up the app
- user taps on the new icon
- user sees a form 
- user enters a tinyURL
- user clicks submit
- user is taken to the edit page of that new created url

If the wireframe is able to draw you the story, then your layout is great!
If however the layout is convoluted and is not intuitive, then you may want to 
rethinking about your layout.

### Design 

Design matters but you are not designers, you are developers.
Find inspiration online from one of these websites or do your own research:


 - [WIX](https://www.wix.com/website/templates)
 - [Dribbble](https://dribbble.com/)
 - [Template Monster](https://www.templatemonster.com/)

### Workflow 

This is the example I have used for midterms: 
[Here's an example of how to do a git workflow here.](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/git-workflow.md)

[Here is a new way which is more to the industry standard called `pull requests`](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d04-Final-Project-Kickoff/github-PR) 

### What Now?

We need to make a proper way to track what features are being worked on, what is still left, 
what are some bugs, and what has been completed.

For this we can use 

[Trello](https://trello.com/en)

These columns should get you started, but feel free to add others 
for a custom workflow (For example "Waiting for a code review")

```
Todo | High Priority(Core) | Stretch | In Progress | Done 
```
### Project Setup and Creation

[Make Express API FROM SCRATCH ](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d04-Final-Project-Kickoff/manual-setup-nodejs)

[Make Express API with EXPRESS-GENERATOR ](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d04-Final-Project-Kickoff/express-generator-setup)

[Make Rails API ](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d04-Final-Project-Kickoff/rails-api)

After this You will need to add react:

[Add React ](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d04-Final-Project-Kickoff/add-react)


You will also need to fix the `cors` problem when you start doing API requests:

[How to Fix Cores (API Setup Lecture Notes)](https://github.com/cpt-waffle/lhl-lectures/tree/master/w10d02-API-Setup)