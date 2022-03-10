class CatsController < ApplicationController
  # /cats
  #  /owners/:id/cats
  def index
    @cats = Cat.all
    if params[:owner_id]
      @owner = Owner.find(params[:owner_id])
      @cats = @owner.cats
    end
  end

  def new
  end

  def create
    # puts params 
  end

  def show
  end

#  params  <--- is Class that looks an object/hash 
#  that has parsed out paramters from the REQUEST
#  params[:items]
#  Product.create(params[:items]) X NO WAY
# Permit or VERIFIY the keys/values you want to be saved the DB
  # { "items" => {"name" => 'Milk',}}
  # Product.create(product_params);
  # private 
  # def product_params 
  #   params[:items].permit(:name)
  # end

end
