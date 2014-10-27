class Board < ActiveRecord::Base
	#validates :name , uniqueness: true
	validates :name , uniqueness: { message: "already taken. Please Use another Name"}
	validates :name , presence: true
end
