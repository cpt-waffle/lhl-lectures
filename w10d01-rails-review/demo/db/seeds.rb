# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "SEEDING DATA..."


puts "CREATING FARMS..."
Farm.destroy_all

farm1 = Farm.create(name: 'Brook Haven Ranch', img: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
farm2 = Farm.create(name: 'Lost Ranch', img: 'https://static01.nyt.com/images/2016/09/25/sunday-review/25Lusk/25Lusk-articleLarge.jpg?quality=75&auto=webp&disable=upscale')
farm3 = Farm.create(name: 'Turkey Farm', img: 'https://canoladigest.ca/wp-content/uploads/2019/02/42-incorporate-farm-feature-min.jpg')

puts "CREATING ANIMALS..."
Animal.destroy_all
cow = Animal.create(name: "Betsy", animal_category: "Cow", img: 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg', farm_id: farm1.id)
chicken = Animal.create(name: 'Hen Solo', animal_category: "Chicken", img: 'https://i.redd.it/15dgifqmi8b51.jpg', farm_id: farm1.id)
