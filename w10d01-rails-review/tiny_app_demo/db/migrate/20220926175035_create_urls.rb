class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      # t.references :users
      t.timestamps
    end
  end
end

  # 1 ---  rollback, and add the fk reference and migrate
  # good option, when you are on a branch, and this change
  #  has not been added to the main/master/prod/etc branch! 

  # 2 ---  make another migration, add reference and migrate 


  # it really depends on circumstances

