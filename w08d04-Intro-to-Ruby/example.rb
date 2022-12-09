# variables

a = 'letter'
fruit = 'apple'
fruit = 'banana'
PI = 3.14
PI = 4

puts a
puts fruit
puts PI

# Functions

def foo a,b,c,d,e
  puts "foo!"
  result = a+b+c+d+e
end


val = foo 1,2,3,4,5
puts "value is, #{val}"

if statements

value = 10

if value < 10 
  puts "result is less than 10"
elsif value == 10 
  puts "result is 10"
else
  puts "result is greater than 10"
end

puts ":)" if true
puts ":(" unless false

# Arrays

arr = [1,2,3, 'hello', false, [1,2]]

puts arr.to_s



arr.each_with_index do |elem, index|
  puts "elem => #{elem}"
  puts "index => #{index}"
end

Objects// HASHES

obj = {a:1, b:2, c:3}
obj["c"] = 44

puts obj
puts obj[:b]
puts obj["c"]

obj.each do |k, v|
  puts "key: #{k}  val:=#{v}"
end

# Yield

def high_order
  puts Time.now
  yield 5
  puts Time.now
end

high_order {|num| puts"MIDDLE #{num}"}

#  Why are we learning Ruby?

# Friday - Monday 

# Monday (Active Record) -- SQL (pg)
# Tuesday ( Intro to Rails)
#  Wed (Jungle Rails Project)
