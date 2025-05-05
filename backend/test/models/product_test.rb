require "test_helper"

class ProductTest < ActiveSupport::TestCase
  def setup
    @product = Product.new(name: "Example", description: "An example product", price: 10.50, available: true)
  end

  test "should be valid with all attributes" do
    assert @product.valid?
  end

  test "should require a name" do
    @product.name = nil
    assert_not @product.valid?
  end

  test "should require a price" do
    @product.price = nil
    assert_not @product.valid?
  end

  test "should have default available true" do
    product = Product.new(name: "New", description: "New desc", price: 1.0)
    assert product.available
  end
end
