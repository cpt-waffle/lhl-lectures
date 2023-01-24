# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Destroying Cats"
Cat.destroy_all
puts "Creating Cats"
Cat.create(name: 'Mr Buttons', age: 5)
Cat.create(name: 'Rosy', age: 1)
Cat.create(name: 'Puma', age: 1)
Cat.create(name: 'Garfield', age: 50)

