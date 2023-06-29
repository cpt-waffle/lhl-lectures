class CatsController < ApplicationController
  # ExpressJS if
  # routes/cats.js
  # routes.get('/', (req,res) => {...})

  # const index = (req,res) => {
    # const templateVars = {};
    # db.query('SELECT * FROM cats').then(data => {
      # templateVars.cats = data.rows;
      # return res.render('cats_index', templateVars);
    # })
  # }

  # app.get('/cats',index)

  # index, new, create, show, edit, destroy, update
  def index
    puts "----------------"
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    else
      @cats = Cat.all
    end
  end
end
