class CatsController < ApplicationController
  #  expressJS
  # catsRoutes

  # router.get('/') /cats
  # router.post('/') POST /cats
  # GET /entity
  def index
    @cats = Cat.all
  end

end

# router.get('/', (req, res) => {
#   res.render('cats_home', templateVars)
# }) 