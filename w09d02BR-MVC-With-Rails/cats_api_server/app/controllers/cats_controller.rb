# EXPRESS JS
# app.get('/urls', (req, res) => {
   # const templateVars = { user: null };
#    res.render('urls_index', templateVars);
# })

#  views folder 
#  urls_index.ejs <--- 
#  user
# productRoutes.js
# router.get('/products', (req, res) =>  {....})

class CatsController < ApplicationController
    def index
        # 95% in rails you WILL NOT need to add a render method...
        @greeting = 'hello'
        @cats = Cat.all # SELECT * FROM CATS;
    end
end
