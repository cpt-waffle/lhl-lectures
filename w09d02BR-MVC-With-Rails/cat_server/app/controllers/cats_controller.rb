class CatsController < ApplicationController


  
  # expressJS
  # const db = require("db/connection") // pg npm package

  # const index = (req, res) =>{
    # ....
    # const templateVars = {};
    # db.query("SELECT * FROM cats;").then(data => {
      # templateVars.cats = data.rows;
      # return res.render('/banana', templateVars)
    # })
  # }

  # app.get('/cats', index)
  def index
    @cats = Cat.all
  end

end
