class CatsController < ApplicationController

  # const index = (req,res) => {
    # ...
    # db.query('SELECT * FROM cats;').then(data => {
      # const templateVars = { cats: data.rows};
      # return res.render('catsHome', templateVars);
    # })
  # }

  # router/app.get('/cats', index);

  #  Product   11.99
  #  line_item 22.14


  def index
    # Product.order(id: :dsec).all // SELECT * FROM products order by id desc;
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    else
      @cats = Cat.all

    end

    @greetings = 'hello world'
  end
end
