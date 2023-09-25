class UsersController < ApplicationController
  # routes/users.js
  # const index =  (req, res) => {
  #   db.query("SELECT * FROM users;").then(data => {
  #     const templateVars = {};
  #     templateVars.users = data.rows;
  #     return res.render('users_page', templateVars);
  #   })
  # });


  # app.get('/users', index);
  # app.post('/users', create);
  # app.get('/users/new', new);
  # app.get('/users/:id/edit', edit)

  def index
    @users = User.all # SELECT * FROM users;
  end

end
