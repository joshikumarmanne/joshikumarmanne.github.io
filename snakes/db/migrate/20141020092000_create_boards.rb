class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :p1_position, default: 0 
      t.integer :p2_position, default: 0
      t.integer :current_player, default: 1

      t.timestamps
    end
  end
end
