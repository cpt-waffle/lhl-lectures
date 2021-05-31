class Url < ApplicationRecord
    belongs_to :user
end

# Order.find(params[:id])
# @order.line_items.each |item| do 
#    item.product 
# end 