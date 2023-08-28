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