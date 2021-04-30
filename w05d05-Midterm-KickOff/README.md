## Midterm Project Kickoff

[slides](https://docs.google.com/presentation/d/1ysah_FAJBYSORvZlTSNRfZgxcV5ntqOa0PzHXQI8CWU/edit)

So we are finally starting our midterms. Your groups are given and you are itching to start.
Where do you go from here? One thing is for certain that you will not be coding BUT focusing 
on the setup and workflow.

### User Stories

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

Here are some examples that we can use from tiny app.

Once your user stories, everything will branch out from them.


### ERDs

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

[Draw.io](https://app.diagrams.net/)
[Visual Paradigm](https://online.visual-paradigm.com/diagrams/solutions/free-erd-tool/)


### Tech Choices

By this step you would usually deside on the tech stack and the reasons why
would use that tech stack. Each langauge has its pros and cons and every project
should be thought througly of why you are choosing these specific languages, frameworks,
and database. However midterms, you have no choise.... ( for now )

The tech stack has been chosen for you

- NodeJS + ExpressJS
- Postgresql
- Javascript + Jquery
- Bootstrap 

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

Wireframes will help you with a site layout. Keep in mind that you are just using wireframes
to show your layout for page elements. No color or theme is needed at this page. Remember: 

- A page does not need to have every UI element on it ( split your features )
- dont be over ambiguous in your wireframes ( Notifcations box ??)

Once you have your wireframes, you will be able to do storyboarding

### Storyboarding

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


[WIX](https://www.wix.com/website/templates)
[Dribbble](https://dribbble.com/)
[Template Monster](https://www.templatemonster.com/)

### Workflow 

Here's an example of how to do a git workflow here.

___________________________________

If you want to look into how to make `pull requests`, thats up to you to 
research how they work.


### What Now?

We need to make a proper way to track what features are being worked on, what is still left, 
what are some bugs, and what has been completed.

For this we can use 

[Trello](https://trello.com/en)

OR

[Github Pages](https://github.com/vasiliy-klimkin/midterm-demo/projects/1)  -------> How to set it up

These columns should get you started, but feel free to add others 
for a custom workflow (For example "Waiting for a code review")

```
Todo | High Priority(Core) | Stretch | In Progress | Done 
```


### Final Thoughts

Before getting to coding, make sure everyone can clone the repo ( one person is owner of the repo ).
Make sure everyone on the team can install all the dependencies, have their database setup, AND
that the app works correctly. 

If a problem occurs, pair programming is the way. 


Good Luck Everyone!

