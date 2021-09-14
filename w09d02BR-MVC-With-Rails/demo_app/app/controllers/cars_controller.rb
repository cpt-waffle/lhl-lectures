class CarsController < ApplicationController

    # router.get('/', (req,res) => {
        # pg.query('SELECT * FROM cars').then(data => {
            # const templateVars = {cars: data.rows};
            # res.render('cars_index', templateVars)
        # })
    # })
    # Controller -- where all the logic happens after the request has come in
    def index
        # the view WITH THE SAME NAME AS THE METHOD will be sender out to the user
        @car = 'Toyota GR86 2022'
        @cars = Car.all
        puts @cars.inspect
    end

    def pineapple
    end
end
