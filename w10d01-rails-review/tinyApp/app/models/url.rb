class Url < ApplicationRecord
  validates :longURL, presence: true
end
