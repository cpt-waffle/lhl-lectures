require 'test_helper'

class DogsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dogs_index_url
    assert_response :success
  end

  test "should get create" do
    get dogs_create_url
    assert_response :success
  end

end
