require 'test_helper'

class BananaControllerTest < ActionDispatch::IntegrationTest
  test "should get banana" do
    get banana_banana_url
    assert_response :success
  end

end
