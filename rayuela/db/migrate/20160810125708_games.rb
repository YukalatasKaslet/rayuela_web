class Games < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :name, null: false
      t.string  :password,  null: false
    end

    create_table :games do |t|
      t.string  :winner
      t.string  :status
    end

    create_table :user_games do |t|
      t.integer     :user_id
      t.integer     :game_id
    end
  end
end
