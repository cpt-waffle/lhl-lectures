# variables
a = 'letter'
fruit = 'apple'
PI = 3.14

# puts a, fruit, PI

# Functions

def foo(a=0,b=0)
  puts "hello world"
  # implicit return 
  a + b
end

# puts foo()

# if statements
# v = 10

if v < 10 
  puts 'v is less than 10'
elsif v == 10
  puts 'v is 10'
else
  puts 'v is greater than 10'
end

puts 'v is truthy' if v
puts "this is a !falsey" unless false


# Arrays

arr = [1,2,3, 'four', 'five', [6,7], false]

puts arr[4]


arr.each_with_index do |item, index| 
  puts "#{item} at index #{index.inspect}"
end

# Hashes

obj = {a:1, b:2, c:3}
obj["e"] = 5;

puts obj

puts obj[:a]

puts obj["e"]

obj.each do |key, value| 
  puts "----"
  puts key
  puts value
  puts "----"
end




# Callbacks
def high_order 
  puts 'before'
  yield 5
  puts 'after'
end

high_order { |num| puts "CALLBACK FUNCTION #{num}"}