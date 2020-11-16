require 'test_helper'

class ShortUrLsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @short_url = short_urls(:one)
  end

  test "should get index" do
    get short_urls_url
    assert_response :success
  end

  test "should get new" do
    get new_short_url_url
    assert_response :success
  end

  test "should create short_url" do
    assert_difference('ShortUrl.count') do
      post short_urls_url, params: { short_url: { name: @short_url.name } }
    end

    assert_redirected_to short_url_url(ShortUrl.last)
  end

  test "should show short_url" do
    get short_url_url(@short_url)
    assert_response :success
  end

  test "should get edit" do
    get edit_short_url_url(@short_url)
    assert_response :success
  end

  test "should update short_url" do
    patch short_url_url(@short_url), params: { short_url: { name: @short_url.name } }
    assert_redirected_to short_url_url(@short_url)
  end

  test "should destroy short_url" do
    assert_difference('ShortUrl.count', -1) do
      delete short_url_url(@short_url)
    end

    assert_redirected_to short_urls_url
  end
end
