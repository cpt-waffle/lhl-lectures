#### W2D2 - Intro to Flexbox

[Slides](https://docs.google.com/presentation/d/1aQU5ZdM9WTDZ8jE71n_MH_iUyJMyOUFF1G3Sfa6Xz_M/edit#slide=id.g36f3efe562_2_266)

[flexFroggy](https://flexboxfroggy.com/)

[internetIsHardFlex](https://internetingishard.com/html-and-css/flexbox/)

Hello and thank you for sitting in for todays lectures! Today we talked about css and flexbox.

#### Quick review on CSS

##### Display: block vs Display: inline vs display:inline-block

![1](https://i.stack.imgur.com/mGTYI.png)

The various differences between display inline, block, and inline-block

#### The Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

![2](https://www.topalovich.com/wp-content/uploads/2017/09/Box_Model.png)

### Flexbox

Flexbox is a great tool for designing the layout of your webpages. It's a display property that automatically arranges the element's children based on some rules that you specify.

[An Absolute Guide to FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

##### Rules about flexbox

1) a Container that wraps a bunch of elements/children

2) that container has a css property `flex`


The html
```html
<div class='menu'>
  <div>Item 1</div>
  <div>Iten 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

the css

```css
.menu {
  display: flex;
}
```

##### CSS Property `justify-content`

Determines alignment along the main axis.

(options for `justify-content`)

- flex-end & flex-start
- center
- space-between
- space-around
- space-evenly

#### Align-items

- flex-start & flex-end
- center
- baseline
- stretch

#### Flex Wraps

- no-wrap
- wrap
- reverse

#### Align Content

- flex-start & flex-end
- center
- space-between
- space-around
- stretch


#### Children of Flex

We ran out of time but the slides contain everything for you to try!!!