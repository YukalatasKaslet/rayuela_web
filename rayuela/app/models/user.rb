class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :user_games
  has_many :games, through: :user_games

  private

  def self.authenticate(name, password)
    # si el name y el password corresponden a un usuario valido, regresa el usuario
    # de otra manera regresa nil
    user = User.find_by(name: name, password: password)

    if user != nil
      return user
    else
      return nil
    end  
  end

end
