require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get abouts" do
    get pages_abouts_url
    assert_response :success
  end

  test "should get teams" do
    get pages_teams_url
    assert_response :success
  end

  test "should get testimonials" do
    get pages_testimonials_url
    assert_response :success
  end

end
