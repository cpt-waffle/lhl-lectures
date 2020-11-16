# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data..."
puts "Seeding Farms..."
Farm.destroy_all

farm_one = Farm.create(name: 'SunnyBrook Farms', img: 'https://ei.marketwatch.com/Multimedia/2019/02/26/Photos/ZQ/MW-HE601_farm_0_20190226111522_ZQ.jpg?uuid=b78f892e-39e1-11e9-8429-ac162d7bc1f7')
farm_two = Farm.create(name: "Turkey Farm", img: 'https://www.pymnts.com/wp-content/uploads/2019/07/farm-big-bank-lending.jpg')
farm_three = Farm.create(name: "Vasiliy's Farm", img: 'https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/3ZvGoaUHqhdH7PNFQJOeg_ebI4o9lTsPG5w880y0qm4/1579023596/public/styles/600x400/public/media/int_files/1012343_edited-1.jpg?h=f452ebb1&itok=OjAEUXwX')

Animal.destroy_all

puts "Seeding Animals..."
animal_one = Animal.create!(name: 'Betsy', img: 'https://s3-wp-lyleprintingandp.netdna-ssl.com/wp-content/uploads/2018/01/09060054/cow-354428_1280.jpg', farm_id: farm_one.id)
animal_two = Animal.create!(name: 'Hen Solo', img: 'https://i.redd.it/1jrbbpa3g9x21.jpg', farm_id: farm_one.id)