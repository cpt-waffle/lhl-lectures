### W04D01 - Intro to CSS

Today we will be looking in something that will be giving you the `pazazz` to webpages that you made/will be making throughout your career... `CSS`

#### Quick Review - `HTML` and `Javascript`

__HTML__ - Stands for `HyperText Markup Language`(The language of the web). You use this language to take in specific data (like text, images, links, lists, etc) and format it in something more readable and visually foramt. In short `HTML` takes some data and parces it in a more fancier and redable way for the the client.

```html
<!DOCTYPE html>
<html>
<head>
  ...
  <title>...</title>
</head>
<body>
  ...
  ...
</body>
</html>
```

Some of the things we talked about writing `HTML`:

 - HTML `<tags>` => they are denoted by the use of `angle brackets` and the tags themselves have either an opening and a closing tag: `<p> Info here or anything else</p>` OR a self closing tag `<input type='text'/>`. They allow all the cool stuff like images and tables and stuff, just by telling your browser what to render on the page. Different tags will perform different functions. The tags themselves don’t appear when you view your page through a browser, but their effects do.

 - `<html>...</html>` contains the ENTIRE code for the document. Rule is to only one opening and closing HTML tag on a page.

 - `<head>...</head>` contains meta-info for the `<body></body>` tag. Can only be ONE `head` tag per page.

 - `<body>...</body>` contains all of the data formatted that will be displayed by the browser. ONE body tag per page.

So far you have been using `divs`, `tables`, `forms`, and `p` tags. There are a few more that you haven't seen up to this this point but you will be starting to use today. You will be seeing things such as:
 -  `<header/>`
 - `<footer/>`
 - `<aside/>`

...among many others, and the question you will be thinking is: Why ?? I can just use `divs` and `spans` and what I know.

The best answer to all these questions is [this link](https://stackoverflow.com/questions/34629509/should-i-use-article-or-div) which I recommend you reference.

So far, using ONLY html our page looks like something from the 1990s ( something like this picture below...)

![1](https://sdz-upload.s3.amazonaws.com/prod/upload/practical_example_tags1.png)

Loading wise, this is super fast, but its missing that spark, that interest factor, and the only way we will make this page go from boring to AWESOMENESS is using `CSS`

#### BEFORE WE DIVE RIGHT INTO IT THERE A FEW THINGS I WANT TO SAY....

- we are jumping to the most vanilla part of `CSS`, no frameworks right now. It's important how you make everything from scratch because not all UI frameworks can do exactly everything you want/need (such as `Bootstrap` or `MaterialUI` or `Bulma`)
- Writing CSS is actually `HARD`. Writing maintainable CSS is `EVEN HARDER`. Ask for code reviews often.
- Writing CSS that works across all browsers can be a nightmare, Nowdays it's not a really in issue ( in some cases it still is )
- `Chrome Dev Tools > Styles` is going to be your best friend
- Theres 100 ways to style something...

![](https://i.imgur.com/Q3cUg29.gif)

#### CSS - Cascading Style Sheets

CSS is a style sheet language used for describing the presentation of a document written in a markup language, commonly HTML. CSS rules how the layout and content of a web page are to be displayed on a screen, paper, or in other media.

```html
<html>
  <body>
    Content
    <div>
      Content
      <p>Content</p>
    </div>
  </body>
</html>
```

```css
html {
  background-color: mediumaquamarine;
  color: floralwhite;
}

body {
  border: 4px solid darkorange;
}

div {
  background-color: darkslategray;
  color: darkorange;
}

p {
  color: floralwhite;
}
```

With this example we set the color of all content within the html tag to 'floralwhite'. That means that the content within the body tag will also be white. We set the color of the content within the div to 'darkorange', and back to 'floralwhite' in the p tag. Some properties like border need to be applied specifically to each tag that needs a border.


#### The Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

![boxModel](https://www.topalovich.com/wp-content/uploads/2017/09/Box_Model.png)

There are 5 properties that contribute to the sizing and layout of an element.

- Content: Area that contains the content.
- Padding: The whitespace between the content and the border.
- Border: A border around the element.
- Margin: The whitespace around the border.
- Position: More on this later.

There are width and height properties that affect the size of the content area. When setting the padding or margin you need to define the values for the top, right, bottom and left sides of the box.

#### Syntax

The ability to style something depends on what style properties are supported by the browser. Properties can have values assigned to them. If we want to set the background color for something that contains that property we can assign it `background-color: #fff`.

#### Classes, Ids, and CSS Imports

Before applying some styles we need to link the style sheet ( in the header )

```html
  <link rel="stylesheet" type="text/css" href="./styles.css">
```

Now we can add css from the `styles.css` file and this will apply to our HTML page.


The HTML `class` attribute is used to define equal styles for elements with the same class name.
So, all HTML elements with the same class attribute will get the same style.

```css
.box {
  border: 2px solid black;
  width: 45px;
  height: 45px;
  background-color: red;
}
```

```html
<body>
 <div class="box">
 </div>
 <div class="box">
 </div>
 <div class="box">
 </div>
 <div class="box">
 </div>
</body>
```


The `id` attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).The `id` value can be used by CSS and JavaScript to perform certain tasks for the element with the specific id value.In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:

```css
#page-header {
  background-color: #17a3dd;
  text-align: center;
  padding: 100px;
  min-height: 100px;
  font-size: 20px;
}
```


```html
  <div id="page-header">
    <h4>Meet Our Awesome Team of Dogs</h4>
  </div>
```

The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.


#### EXTRA NOTES AND RESOURCES



 - [CSS BEST PRACTICES](https://github.com/jareware/css-architecture)
 - [ccs.cool](css.cool)