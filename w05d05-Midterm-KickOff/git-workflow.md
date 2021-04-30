### Git Workflow ( Without Pull Requests )

The first we going to do is make sure we are on (main)master and that (main)master is fully 
updated.

![0](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/0.gif?raw=true)

```bash
git pull origin master
```

Then we are going to make a brand new branch and switch right to it by running the command

![1](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/1.gif?raw=true)

```bash
git checkout -b ____BRANCH___NAME_____
```

Now you will work this branch completing the feature you need to do. BE SURE TO COMMIT OFTEN.

![2](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/2.gif?raw=true)

__FEATURE COMPLETE__ ! Now that we are satisfied with our completed work we need to get that change
into master for all of our teammates to use.

First we will switch back to (main)master

``` bash
git checkout master
```

![3](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/3.gif?raw=true)

Then we will pull (main)master to get any changes that our teammates that worked on. 


```bash
git pull origin master
```

![4](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/4.gif?raw=true)

Once we pulled we will switch to our feature branch and perform a `merge`. All the new work on (main)master
will be attempted to be merged into your branch. 

```bash
git checkout ___BRANCH_NAME___
git merge master
```

![5](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/5.gif?raw=true)

#### MERGE CONFLICTS MAY OCCUR!!!

This is totally alright. Make sure to resolve ALL the merge conflicts before moving on this step. These things happen because the files you worked on, were also worked on your teammates. Git is confused which one is a the version it should use ( or how to combine the two versions) and will ask you to do it manually. Look at the files that have conflicts and go through them ( preferably WITH YOUR TEAMMATES because they know which code is needed and which code is not ). __This action can cause for you to DELETE YOUR TEAMMATES WORK__!! Becareful when fixing merge conflicts.

Verify all the features of your app still work after the conflict resolve. Test your feature and features that your teammates have added to the codebase to see that is nothing is broken.

Once all the merge conflicts have been fixed commit the fix with:

```bash
git add .
git commit -m "fix merge conflict"
```

Once everything has been commited, you need to switch to (main)master branch to do the final merge.

```bash
git checkout master
git merge ___BRANCH_NAME___
```

![6](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/6.gif?raw=true)

Everything we fixed/added to our branch should now be on master. Last thing left to do is to push this master
into github

```bash
git push origin master
```

![7](https://github.com/vasiliy-klimkin/lhl-lectures/blob/master/w05d05-Midterm-KickOff/GIT_workflow_gifs/7.gif?raw=true)

To start a new feature, repeat the entire process from the top of the page!