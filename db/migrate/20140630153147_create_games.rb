class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :p1
      t.integer :p2
      t.timestamps
    end
  end
end
