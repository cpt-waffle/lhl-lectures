class ApplicationController < ActionController::Base
    def index
        @animal = Animal.all
    end

end
