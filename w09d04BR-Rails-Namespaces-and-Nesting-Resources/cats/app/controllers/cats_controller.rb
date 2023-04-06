class CatsController < ApplicationController
  # const index = (req, res) => {
    # ...
    # db.query("SELECT * FROM cats;").then(data => {
        # const templateVars = {};
        # templateVars.cats = data.rows;
        # return res.render('cats_page', templateVars);
    # })
    # ...
  # }

  # app.get('/cats', index)

  # GET /cats
  def index
    puts params
    if params[:user_id]
      @user = User.joins(:cats).find(params[:user_id])
      # we have to set these assosiations 
      @cats = @user.cats
    else
      @cats = Cat.all
    end
  end

  # GET /cats/:id
  def show
  end
  
  # POST /cats/
  def create
  end

  # GET /cats/new
  def new
  end

  # PUT/PATCH /cats/:id
  def update
  end

  # DELETE /cats/:id
  def destroy
  end
end
