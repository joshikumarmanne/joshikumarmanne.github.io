class BoardsController < ApplicationController
	def index
		@boards = Board.all.order("created_at DESC")
		@board = Board.new
	end
	def create
			@board = Board.new(board_params)
			
			if @board.save 
				cookies[@board.id] = 1
				redirect_to @board
			else
				@boards = Board.all.order("created_at DESC")
				render "index"
			end

	end
	def show
		@board = Board.find(params[:id])
		cookies[@board.id] ||= 2
	end
	def update
		board= Board.find(params[:id])
		board.update_attributes(board_params)
		redirect_to board
	end
	def board_params
    	params.require(:board).permit(:p1_position,:p2_position,:current_player,:name)
    end

end


