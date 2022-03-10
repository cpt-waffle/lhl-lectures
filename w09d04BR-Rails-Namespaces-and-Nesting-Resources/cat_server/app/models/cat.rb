class Cat < ApplicationRecord
    belongs_to :owner
end


# Orders
# /orders/1
# Order.find(1).line_items.each item
# item.product
