class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.timestamps
    end
  end
end

#  initial commit --> add file --->  change  file structure --> refactor ---> finish feature ---> fix config file
  #   ^---- config files