class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :saler
      t.string :url

      t.timestamps
    end
  end
end