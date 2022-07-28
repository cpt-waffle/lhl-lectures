require 'test_helper'

class OwnersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get owners_index_url
    assert_response :success
  end

end
