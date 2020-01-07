#### The Dev Workflow

Welcome to your second day of bootcamp and your first day of lecture !!!

##### Who am I?

- __Vasiliy Klimkin__
  - I go by Vasiliy, Vas, ( and sometimes Morpheous)
  - Tried to do Comp Sci @YorkU, ended up graduating from Seneca@York
  - Grduate of LHL Bootcamp May 29th 2017 Cohort!!
  - Loving the Web Coder Life, interested in Unity Programming, and Hardware

![](https://i.imgur.com/0no1LRO.gif)

##### Todays Lecture: The workflow of a dev

We will be looking into from start to finish, the entire dev workflow that you will be following throughout the bootcamp AND throughout your developer lives.


#### The problem

We are tasked to create a program that takes in any number of command line arguments which will be numbers, and then add them toghether in a giant sum.

### Where do we start ??

We will start with something that can track our progress throughout this problem. Enter `GIT`. `GIT` is a Version Control System (VCS) which allows us to keep track of changes to our projects and efficiently collaborate with others on the work.

Imagine you'd be working on some awesome code, where you are trying launch the rocket. A few hours ago you have figured out, how to make the ignition turn on, but you are having struggles figuring out how to send the fuel to the boosters. While messing around you ended up breaking the ignition and the trajectory course system on the rocket. `GIT` is a tool that can help you revert your project back to the semi working state, so you can start again from a good point, rather than figuring out whats exactly broken.

If you are into video games, `GIT` is basically a check point save system.

The first thing we do when we start a brand new project is we `git init` which `initializes` git in that folder. This means git will watch for file changes, added files, and removed files.

Once the `initialization` is done, we can begin work. Files that are tracked by `git` can be in `4` different states.

 - __Un-tracked__ A file that is in your folder, and git is notifying you of it but is ignoring what to do with it for now ( Usually the files are in red )
 - __Staged__ You've used git add to include the file on the next commit. You can also say staged files are in the commit index or staging area. (Usually the files are in green )
 - __Commited__ A commit has been created with the added files; this file is now actively under version control. Note that the file hasn't been sent to Github.

__!!ALWAYS COMMIT AS OFTEN AS POSSIBLE!!__

This is the best way to keep your work in progress saved up and have changes done incrementaly. If you ever need to revert a change you can always go back a `commit` kind of like going back in time. So please please please, `commit` often!

#### The Workflow We Followed

`git clone/git init` --> `WORK WORK WORK` --> `git status (to check what files we worked on)` --> `git add .(to stage ALL files)` --> `git commit` --> `git push (so our work goes into github)`

#### How to Tackle a Problem

Our problem we will be working through is this:
We want to make a program, that takes in unlimited number of arguments (command line arguments) and prints out the sum of those arguments. Skip any non-whole numbers and DO NOT skip negative values.

**Steps to tackle this problem**

**1:** Understand what the question is asking

The problem in itself doesnt tell us much so we will try to make the instructions alittle bit more verbouse so it can gives us hints.

We need to write a program that:

 - that takes in `UNLIMITED` number of arguments. (What is a `command line arguments`?)
 - and prints out the sum of thouse arguments. <---- ELABORATION: go through each argument ( maybe loop? ) and add them up.
 - Skip any non-whole numbers
 - dont skip negative values

**2:** Research The Unknowns

 - How can we tell if it's a whole number?

    ```js
      Number.isInteger(parcedNum);
    ```

 - How do we get the command line arguments?

    ```js
    process.argv
    ```

 - How do we loop through an an array?

    ```js
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
    ```

 - Does the command line give us a string or an number?

  ```js
    console.log(process.argv)
  ```

 - How do we convert string to number?

  ```js
    parseInt(numberArray[i]);
  ```


**3:** Coding Time!! With Increments!!

`console.log` <--- Your new Partner in Crime!!!
This is the best debugging tool that you can ask for. It will print any kind of value to the screen. Its also the best way to keep track of your program's logic.

So Tacking any problem head on can prove to be difficult. I use this method to help me get started.

**IF I CAN DO `X` THEN I CAN DEFINETLY DO `Y`**

IF i can get the command line arguments then I can probably loop through them.

IF I can loop through them I must be able to add them toghether. etc etc etc.

#### !!!! Do not try to do 'code golf' !!!!

Code golfing is a term where you are trying to solve a problem with the least amount of lines. Even though it maybe very nice to solve something in a 1 lines, sometimes in becomes unreadable, or unmaintainable.

__Exibit A__


```js
const addNumbers = function (numberArray) {
  return numberArray.reduce((acc, num) => Number.isInteger(parseInt(num)) ? parseInt(num) + parseInt(acc) : acc);
}
```

Sometimes going into refactoringis too much! Ask me about this in a few weeks and i wont remember why i did this or how i did it!