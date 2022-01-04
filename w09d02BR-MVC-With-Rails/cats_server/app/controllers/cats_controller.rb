class CatsController < ApplicationController
    # catsRoutes.js
    # Router.export 
    # router.get('/', (req, res) = > {
        # const templateVars = {catsArr: [...]};
        # res.render('cats_homepage', templateVars)
    # })
    def index
        @cats = Cat.all  # pg.query("SELECT * FROM CATS").then(data => {})
    end
end
