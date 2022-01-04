require 'test_helper'

class DogsControllerTest < ActionDispatch::IntegrationTest
  test "should get :index" do
    get dogs_:index_url
    assert_response :success
  end

end
