class MemesController < ApplicationController
    def index
        a = 2 + 2
        @memes = Meme.all
        # get items from DB
        # res.render('memes_index') // express days
        render json: @memes
    end

    def new
        # @name = 'Vasiliy'
        # @arr = [1,2,3,4]
        # @num = 34 + 36
        @meme = Meme.new
        # templatevars = {urls: urlDatabase, user: findUser(req.cookies[user.id])}
        # res.render('index', templatevars);
    end


    def create
        # byebug
        Meme.create(meme_params())
        redirect_to '/memes'
    end

    private
    def meme_params
      return params.require(:meme).permit(:img, :name)
    end
end
