class AuthorsController < ApplicationController
  # WHERE ALL YOUR LOGIC GOES
  def index
    #byebug
    @authors = Author.new
    puts author
  end

  def create
  end
end
