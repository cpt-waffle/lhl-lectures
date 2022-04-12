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

  test "should get privacy" do
    get pages_privacy_url
    assert_response :success
  end

end
