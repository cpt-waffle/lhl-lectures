class CatsController < ApplicationController

  # routes/cats.js
  # const router = require('express').Router
  #  const index = (req, res) => {
    # //...
    # db.query('SELECT * FROM cats').then(data => {
      # // req.params
      # const templateVars = {cats: data.rows };
      # return res.render('/cats_home', templateVars);
    # })
  # }

  # router.get('/', index);

  # /cats --> index()

  # index, new, create, update, destroy, show

  # Store.where
  # Employee.all

  # SELECT * FROM users"
  # Employee.all

  def index
    puts "----------------------------------------------------------"
    puts params[:user_id]
    puts "----------------------------------------------------------" 

    @cats = Cat.all
    if params[:user_id]
      @user = User.find(params[:user_id])
      @cats = @user.cats
    end
  end

  def new

  end


end
