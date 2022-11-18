class CatsController < ApplicationController
  # const index = (req,res) => {
    # templateVars = {};
    # db.query('SELECT * FROM CATS').then(data => {
      # templateVars.cats = data.rows; 
      # res.render('cats_home', templateVats)
    # })
  # }

  # app.get('/cats', index)
  def index
    puts "-----------"
    puts params
    if !params[:user_id]
      @cats = Cat.all
    else
      @user = User.find params[:user_id]
      @cats = @user.cats 
    end
  end


end
