# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Purging Database..."
Cat.destroy_all
User.destroy_all
puts "Purge Complete!"


puts "Creating Owners..."
user_one = User.create(name: 'Suzan');
user_two = User.create(name: 'Philip');
user_three = User.create(name: 'Rachel');
puts "user creation complete!"
puts "Creating Cats..."
Cat.create(name: 'Rosey', color: 'black', user_id: user_one.id);
Cat.create(name: 'Puma',   color: 'black', user_id: user_one.id);
Cat.create(name: 'Mr Meows',  color: 'cinnamon', user_id: user_two.id);
Cat.create(name: 'Amber',   color: 'amber', user_id: user_three.id);