# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating makes..."
5.times do
  Make.create!(make: Faker::Vehicle.make)
end

puts "creating models..."
5.times do
  Model.create!(model: Faker::Vehicle.model)
end

puts "creating trims..."
5.times do
  Trim.create!(trim_level: Faker::Vehicle.style)
end

puts "creating styles"
5.times do
  Style.create(body_style: Faker::Vehicle.car_type)
end

makes = Make.all.uniq.to_a
models = Model.all.uniq.to_a
styles = Style.all.uniq.to_a
trims = Trim.all.uniq.to_a

puts "creating cars..."
# Creating 50 random cars
50.times do

  Car.create!({
    make: makes.sample,
    model: models.sample,
    style: styles.sample,
    trim: trims.sample,
    year: rand(1950..2019),
    color: Faker::Color.color_name.capitalize,
  })
end