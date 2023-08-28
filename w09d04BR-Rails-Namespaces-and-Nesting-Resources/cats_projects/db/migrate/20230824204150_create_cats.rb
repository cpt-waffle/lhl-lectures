class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :users
      t.timestamps
    end
  end
end


#  roll back a commit/migration <--- deletes all data/history of commit
#  add a new commit/migration  <--- keeps everything just makes change for later