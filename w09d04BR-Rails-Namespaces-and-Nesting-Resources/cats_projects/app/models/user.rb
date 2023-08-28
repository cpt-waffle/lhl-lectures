class User < ApplicationRecord
  has_many :cats # METHOD .cats('SELECT * FROM cats where user_id = ${}')
end

# Order -> line_items
# Order.find(1).line_items() ===> [...]
# Order.find(1).line_items each do |item| 
#    item.products()
# end