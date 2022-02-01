# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying Cats"
Cat.destroy_all
puts 'Creating cats!'
Cat.create(cat_name: "Mr Buttons", age: 3)
Cat.create(cat_name: "Rosy", age: 1)
Cat.create(cat_name: "Fluffy", age: 4)
Cat.create(cat_name: "Bob", age: 1)
