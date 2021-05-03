# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Create users!"
User.destroy_all
user = User.create(email: 'v@k.ca', password: '123456')
User.create(email: 'ab@c.ca', password: '123456')
User.create(email: 'john@gmail.ca', password: '123456')

puts "Create urls!"

Url.destroy_all
# Url.create(shortURL: 'Asc45df', longURL: 'www.google.ca', user_id: 2)
user.urls.create(shortURL: 'Asc45df', longURL: 'www.google.ca')
user.urls.create(shortURL: 'Bsdfdf', longURL: 'www.twitter.com')
user.urls.create(shortURL: 'CCsd5', longURL: 'www.reddit.com')
# user.urls.create(shortUrl: 'AAAAAAA', longUrl: 'www.BBBBBBB.com')

