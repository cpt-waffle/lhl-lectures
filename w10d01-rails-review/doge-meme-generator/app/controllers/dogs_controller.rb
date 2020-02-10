class DogsController < ApplicationController

  def index
    @hello = "Greeting everyone!!"
    @dogs = Dog.all
  end



  def calculate
    2 + 2
  end
end
