## Welcome to Day 1

Today we'll be talking about `git`.

git is a tool that helps you keep track of changes you make for every and any file. 
lets you make snapshots of files that you have created and worked upon.

you write some code, its really good code  (it works :) )
you add more things to that code, and its now not working correctly :(
you can use github to go back in time, to the original good working code.

to create a git repo

```sh
git init
```


to look at whats being untracked/tracked or any changes 

```sh
git status
```

to add files to staging we will use:

```sh
git add file_name
```

to commit the file to the snapshot you will use the command

if you staged a file, and want to stage the same file with new changes again,
it will remove the old stage snapshot, and add the new (erasing the last staged file)

```sh
git commit -m 'message'
```

to commit multiple files from your directory use the 

```sh
git add filename filename
```

or 

```sh
git add .
```


if you want to remove something from staged
use the 

```sh
git reset filename
```



