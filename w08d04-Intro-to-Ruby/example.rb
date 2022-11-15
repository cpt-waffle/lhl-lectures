# variables

fruit = 'apple'
fruit = 'banana'
PI = 3.14

puts fruit
puts PI

# Functions

def foo bar, a, b, c
  puts "hello world" 
  10 + 10
end

result = foo 1,2,3,4

puts "result is #{result}"

# if statements

result = 10

if result < 10
  puts "result is less than 10"
elsif result == 10 
  puts "result is 10"
else
  puts "result is greater than 10"
end

puts ":)" if true
puts ":(" unless false

# Arrays and For loops

arr = [1,2,3, 'hello', false, [1,2]]

puts arr[0]
puts arr.to_s

#  Looping through arrays

#  .each is the most common loop

arr.each_with_index do |val, index|
  puts "Val is #{val}"
  puts "Index is #{index}"
  puts "---------------"
end

# Hashes

obj = {a: 1, b:2, c:3}
obj["b"] = 'test'

puts obj
puts obj[:a]
puts obj["b"]

obj.each do |key, val|
  puts "key=#{key}    val=#{val}"
end

def high_order
  puts "start"
  yield 4 
  yield 5
  puts "end"
end


high_order {|num| puts "Middle! #{num}"}

# next week its all ruby and ruby on rails
# rails review, adv topic , adv topic, final pj
#              rails testing rails testing
# 1.3

# ActiveRecord
# a way to do SQL (just like PG), in ruby
# but without writting ANY SQL code...

# Tue - Wed
# - learn basics of Ruby on Rails

# Jungle (ruby on rails)
# -- how to be a jr dev!
