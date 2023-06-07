class CatsController < ApplicationController
    # express
  # users.js
  # app.get('/cats')
  #const index = (req, res) => {
    # const templateVars = {};
    # db.query('SELECT * FROM cats').then(data => {
      # templateVars.cats = data.rows;
      # return res.render('users_index', templateVars);
    # })
# }

  # router.get('/', index)
  def index
    puts '-------------------'
    @cats = Cat.all
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    end

    puts '-------------------'
  end
end
