# variables

a = 'letter'
fruit = 'apple'
PI = 3.14 # any capital cased variable is considered to be a constant

PI = 4

puts a
puts fruit
puts PI

# functions

def foo a=0,b=0
  puts a+b
  a + b # implicit return
  
end

r = foo(4,2)
puts "r is #{r}"

# if statements

value = 10

if value < 10
  puts "value is less than 10"
elsif value == 10
  puts "value is 10"
else
  puts "value is greater than 10"
end

puts "value is 10 again :)" if value == 10 
puts "its not 9" unless false # if !

# Arrays

array = [
  1,2,3,4,5,
  'six', 'seven', 'eight',
  [1,2,3]
]

puts array.to_s

array.each_with_index do |elem, index|
  puts "element:  #{elem} at index #{index}"
end

# Hashes

obj = {a:1, b:2, c:3}

puts obj[:a]


obj.each do |key, value|
  puts "-----------"
  puts key
  puts value
  puts "-----------"
end
# callbacks

def high_order
  puts 'before' # <--- TimeStamp 12:10:33
  yield 5 # <-- some_expensive_long_function
  puts 'after' # <-- TimeStamp  12:11:00
end


high_order { |num| puts "CALLBACK RUNS~~  #{num.to_s}"}