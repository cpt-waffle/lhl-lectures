## Add React 

No matter what backend you have you will need to add at a front-end application in order to have user interactions.

For this we will use the standard `create-react-app` to generate our boilerplate for react.

https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

Go inside your project directory, and right beside `server/` (or any backend folder you have set up) run the approriate command that applies to what you need:

```sh
# Standard
npx create-react-app client
cd client
npm start
```

```sh
# PWA
npx create-react-app client --template cra-template-pwa
cd client
npm start
```

If you need other examples like `with typescript`, search up the different templates `create-react-app` has. 

Your folder structure should look like this:

```
project_name
    ├── server/
    └── client/
```

From here everything has been setup, and you can start working on adding other packages like `axios` and other things to the front-end.
