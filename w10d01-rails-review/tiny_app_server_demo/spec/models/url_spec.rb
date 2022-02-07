require 'rails_helper'

RSpec.describe Url, type: :model do
  describe 'url validations' do

    it 'tries to save a url that gives everything correctly' do
      @user = User.create(email: "v@a.ca", password: '12345')
      @url = Url.new
      @url.longURL = 'www.funnyjunk.com'
      @url.shortURL = 'a9345fs'
      @url.user_id = @user.id
      @url.save
      expect(@url.valid?).to be true
    end

    it 'tries to save a url that doesnt have SHORTURL' do
      @user = User.create(email: "v@a.ca", password: '12345')
      @url = Url.new
      # @url.longURL = 'www.funnyjunk.com'
      # @url.user_id = @user.id
      @url.save
      puts @url.errors.messages
      expect(@url.valid?).to be false
      
      expect(@url.errors.messages[:shortURL]).to include "can't be blank"
    end


  end
end
