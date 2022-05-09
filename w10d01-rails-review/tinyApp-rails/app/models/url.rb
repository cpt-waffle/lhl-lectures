class Url < ApplicationRecord
  validates :shortURL, presence: true
end
