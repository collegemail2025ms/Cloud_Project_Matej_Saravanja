class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    create_table :products, if_not_exists: true do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.boolean :available, default: true

      t.timestamps
    end
  end
end
