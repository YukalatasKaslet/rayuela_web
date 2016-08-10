class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :user_games
  has_many :names, through: :user_games 
end
