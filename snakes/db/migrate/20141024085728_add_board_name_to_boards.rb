class AddBoardNameToBoards < ActiveRecord::Migration
  def change
    add_column :boards, :board_name, :string
  end
end
