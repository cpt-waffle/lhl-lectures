puts "Create users!"
User.destroy_all
user_one = User.create(email: 'v@k.ca', password: '123456')
user_two = User.create(email: 'ab@c.ca', password: '123456')
user_three = User.create(email: 'john@gmail.ca', password: '123456')

puts "Create urls!"

Url.destroy_all
# Url.create(shortURL: 'Asc45df', longURL: 'www.google.ca', user_id: 2)
Url.create(shortURL: 'Asc45df', longURL: 'www.google.ca', user_id: user_one.id)
Url.create(shortURL: 'Bsdfdf', longURL: 'www.twitter.com', user_id: user_one.id)
Url.create(shortURL: 'CCsd5', longURL: 'www.reddit.com', user_id: user_one.id)

Url.create(shortURL: 'asd2323', longURL: 'www.apple.ca', user_id: user_two.id)
Url.create(shortURL: 'ddd34f', longURL: 'www.wallmart.com', user_id: user_two.id)
Url.create(shortURL: 'fff3f3', longURL: 'www.reddit.com', user_id: user_two.id)
Url.create(shortURL: 'r3twe5', longURL: 'www.youtube.com', user_id: user_two.id)
Url.create(shortURL: 'sfsfsf', longURL: 'www.example.com', user_id: user_two.id)

