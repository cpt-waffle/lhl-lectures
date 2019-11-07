#### Response Design + SASS

##### Review (CSS) What is it?

CSS. Stands for "Cascading Style Sheet." Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.


For the last week you have been working on your 'tweeter' (css and html) site, where you your first taste of `css`. I'm sure everyone has thier opinions of css, and mine is that we have a love/hate relationship with it. When it works its great and when it doesnt.....

![cssHard](https://media0.giphy.com/media/yYSSBtDgbbRzq/source.gif)

Today's lecture is on responsive design! You may have noticed that your website, as great as it is now, when you squish it, it doesn't loook too too great.

This is not a problem because we are finally entering the realm of responsive design.

**Responsive Design** is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.Essentially, responsive design is a way to put together a website so that it automatically scales its content and elements to match the screen size on which it is viewed. It keeps images from being larger than the screen width, and prevents visitors on mobile devices from needing to do extra work to read your content.


### DEMO

#### Viewport

[What is viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)

```js
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
  </head>
  </html>
```

#### Percents vs Pixels vs Ems

[Explanation taken from here...](https://kyleschaeffer.com/css-font-size-em-vs-px-vs-pt-vs-percent)

`Ems` (em): The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt, .5em would equal 6pt, etc. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature.

`Pixels` (px): Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). Many web designers use pixel units in web documents in order to produce a pixel-perfect representation of their site as it is rendered in the browser. One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.

`Percent` (%): The percent unit is much like the “em” unit, save for a few fundamental differences. First and foremost, the current font-size is equal to 100% (i.e. 12pt = 100%). While using the percent unit, your text remains fully scalable for mobile devices and for accessibility.


Generally for anything responsive we tend to use `em`s, `rem`s and `percent`s. we tend to avoid pixels just forth the fact of

```css
  .item1 {
    background: green;
    width:100%;
  }

  .item2 {
    background: blue;
    width: 49%;
    display:inline-block;
    box-sizing: border-box;
  }

  .item3 {
    background: black;
    width:49%;
    display: inline-block;
    box-sizing: border-box;
  }
```

#### Media Queries

[What are Media Quries?](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

#### Flexbox

[The absolute guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```css
<!-- focus more on the overall container rather than child -->
.container {
  display: flex;
  justify-content: space-between;
}

.container .item {
  flex-grow: 1;
}
```

Not much to say about it thats its one of the best tools that you can use to layout your page (NOTE: THIS IS NOT A REPLACEMENT FOR GRID, INFACT YOU SHOULD USE BOTH, WHENEVER YOU DEEM ITS NEEDED)

#### SASS

[The SASS DOCS](https://sass-lang.com/guide)

Best way to describe sass, that it adds extra functionality and features which then COMPILES back to css so the browser can understand it. Its great to have variables declaration and nesting.

#### My favorite resources

[Internet is HAAAARD](https://internetingishard.com/html-and-css/) <--- highly recommend!!!!

[Flex Froggy](https://flexboxfroggy.com/)

[Grid Garden](https://cssgridgarden.com/)


