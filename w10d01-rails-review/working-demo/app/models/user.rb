class User < ApplicationRecord
    has_many :urls
end

# User can have manu Urls
# a Url will belong to one user

# urls table has a foreign_key user_id

# SELECT * FROM urls JOIN users ON 
# users.id = urls.user_id