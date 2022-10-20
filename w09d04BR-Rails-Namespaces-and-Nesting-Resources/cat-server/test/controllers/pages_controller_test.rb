require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get banana" do
    get pages_banana_url
    assert_response :success
  end

end
