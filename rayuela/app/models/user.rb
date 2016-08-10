class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :user_games
  has_many :scores, through: :user_games
end
