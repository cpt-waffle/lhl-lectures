class CatsController < ApplicationController

  # app.get('/cats', (req,res) => {
  #   pg.query('SELECT * FROM cats').then(data => {
  #     templateVars.cats = data.rows;
  #     return res.render('cats_index');
  #   })
  # })

  def index

    puts "------------------------------------------------"
    puts params
    puts "------------------------------------------------"
    @cats = Cat.all
    if (params[:user_id])
      @user = User.find(params[:user_id])
      @cats = @user.cats
    end

    @greetings = "hello world"
  end
end
