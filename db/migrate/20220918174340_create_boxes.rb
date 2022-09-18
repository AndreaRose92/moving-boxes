class CreateBoxes < ActiveRecord::Migration[7.0]
  def change
    create_table :boxes do |t|
      t.integer :number
      t.string :room
      t.text :contents

      t.timestamps
    end
  end
end
