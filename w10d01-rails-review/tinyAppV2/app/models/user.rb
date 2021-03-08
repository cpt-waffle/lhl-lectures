class User < ApplicationRecord
    has_many :urls, dependent: :destroy
end
