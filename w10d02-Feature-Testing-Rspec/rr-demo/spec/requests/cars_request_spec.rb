require 'rails_helper'

RSpec.describe "Cars", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/cars/index"
      expect(response).to have_http_status(:success)
    end
  end

end
