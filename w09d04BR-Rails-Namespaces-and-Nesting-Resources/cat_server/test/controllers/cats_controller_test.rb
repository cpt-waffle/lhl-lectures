require 'test_helper'

class CatsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cats_index_url
    assert_response :success
  end

  test "should get show" do
    get cats_show_url
    assert_response :success
  end

end
