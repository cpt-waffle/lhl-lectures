# Variables
fruit = 'apple'
a = 'letter'
PI = 3.14

puts fruit
puts a
puts PI

# Functions

def foo a=0, b=0
  puts "this is my function"
  a + b
end

result = foo 9
puts result

# If Statements

value = 10

if value < 10
  puts 'value is less than 10'
elsif value == 10
  puts 'value is 10'
else
  puts 'value is greater than 10'
end

puts ' :) ' if value == 10

puts "It wasn't 0 :|" unless value == 0 

# Arrays

array = [1,2,3, 'four', 'five', [6,7,8]]

puts array.to_s

puts array[0]

# looping through arrays

array.each_with_index do |num, index|
  puts "-------"
  puts "#{num.to_s} --> #{index}"
  puts "-------"
end

# Objects/Hashes

obj = {a: 1, b:2, c:3}

puts obj
puts obj[:a]
puts obj[:a]

obj.each do |key, val|
  puts "the key is #{key}"
  puts "the val is #{val}"
end

# yield 

def high_order
  puts "before"
  yield 5
  puts 'after'
end


high_order { |num| puts "CALLBACK IS RUNNING NOW! #{num}" }