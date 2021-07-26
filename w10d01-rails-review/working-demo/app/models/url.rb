class Url < ApplicationRecord
    belongs_to :user
    validates :longURL, presence: true
end


# describe 'validations url' do
    # x = Url.new
    # x.user_id = 1
    # x.save
    # expect(x.errors).toHave('LongURL cant be blank')
# end

# describe 'validations url' do
    # x = Url.new
    # x.longURL  = 'dadadad'
    # x.save
    # expect(x.errors).toHave('User must exist')
# end