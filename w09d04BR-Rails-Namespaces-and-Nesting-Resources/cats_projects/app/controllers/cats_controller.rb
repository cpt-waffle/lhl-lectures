class CatsController < ApplicationController
  # const index = (req, res) => {
    # const templateVars = {};
    # templateVars.cats = db.query('SELECT * FROM cats').then(data => {
      #  templateVars.cats = data.rows;
      # return res.render('cats_index', teplateVars);
    # })
  # }

  # app.get('/cats', index)
  # router.get('/', index)

  # index, show, create, destroy, edit, update

  def index
    puts "------------------------"
    puts params
    puts "------------------------"


    @cats = Cat.all
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    end

  end

end
