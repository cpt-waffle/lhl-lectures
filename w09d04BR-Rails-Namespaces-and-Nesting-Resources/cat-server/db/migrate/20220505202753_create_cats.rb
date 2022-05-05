class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :owners
      t.timestamps
    end
  end
end

# If im on my branch working 
#  i can rollback and change stuff

# if the migrations made it to master/main/prod
# to change it, make a NEW migration