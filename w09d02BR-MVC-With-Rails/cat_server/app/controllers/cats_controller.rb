class CatsController < ApplicationController
  # an action, is a a method in the class
  # ExpressJS
  # // cats.js

  # const router = express.Router();

  # const index = (req, res) => {
      # db.query("SELCT * FROM cats;").then(data => {
        # const templateVars = {cats: data.rows};
        # res.render('catsMainPage', templateVars);
      # })
  # }  

  # router.get('/', index)

  def index
    # all the logic will go here!
    # 90% of the time when working with rails
    # you will NOT see a render method
    @cats = Cat.all
    @greetings = "hello"
  end
  
end
