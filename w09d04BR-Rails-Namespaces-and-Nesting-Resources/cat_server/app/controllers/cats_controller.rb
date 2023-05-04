class CatsController < ApplicationController
# const index = (req, res) => {
  # const templateVars = {a: 'hello'};
  # db.query('SELECT * FROM CATS').then(data => return data.rows)
  # dbHelpers.getCats().then(data => {
    # templateVars.cats = data.rows;
    # res.render('urls_index', templateVars);
  # })
  # })


  # app.get('/urls', index);
  # ...
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    else
      @cats = Cat.all
    end

    # Cat.all SELECT * FROM CATS
  end

  def show

  end

  def create

  end

  def destroy
  end

  def new
  end


end
