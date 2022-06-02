class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :owners # FK
      t.timestamps
    end
  end
end

#  Context
# If I'm working on a branch, and i make this mistake, 
# i can do 
# 1 - rollback add the approaite key and re-migrate
# 2 - make a new migration, add the foreign key and migrate

# BUT if this migration gets out into the wild, into our production
#  and data gets created, then ONLY do 
# 2 - make a new migration, add the foreign key and migrate