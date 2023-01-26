class CatsController < ApplicationController
  def index
    puts "---------------------"
    puts params[:user_id]
    puts "---------------------"
    if params[:user_id]
      @user = User.find(params[:user_id]) # 1  WHERE id = ?
      @cats = @user.cats
    else
      @cats = Cat.all
    end
  end
end
