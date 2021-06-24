class Admin::CatsController < ApplicationController

    def index
        @cats = Cat.all
    end
end
