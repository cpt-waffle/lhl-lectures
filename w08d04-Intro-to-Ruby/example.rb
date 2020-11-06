require 'byebug'
PI = 3.14
greetings = 'hello world'

def foo name, age
    puts 'name: ' + name + '   age: ' + age.to_s
    puts "name: #{name}   age: #{age}"
end


puts PI
puts greetings
foo 'vasiliy', 29

print_name = false

array = [1,2,'three',4,5,6,'seven',8,9,10]

array.each_with_index do |item, index|
    # puts "LOOP HERE"
    # puts index
    # puts item
end


obj = {
    a: 1,
    b: 2,
    c: 3,
    'this is a cool value': 44
}
obj[:'this is a string'] = 55

obj.each do |key, value|
    # puts "key #{key}"
    # puts "val #{value}"
end

def yield_function
    puts 'before running yield'
    yield
    puts 'after running yield'
end


yield_function { puts "CALLBACK" }





