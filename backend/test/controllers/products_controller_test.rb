require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = Product.create(name: "Test", description: "Desc", price: 9.99, available: true)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: {
        product: {
          name: "New", description: "New desc", price: 12.34, available: false
        }
      }, as: :json
    end
    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: {
      product: { name: "Updated" }
    }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end
    assert_response :no_content
  end
end
