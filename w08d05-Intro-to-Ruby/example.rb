#  Variables
fruit = 'banana'
PI = 3.14
# PI = 4
b = 'a random letter'

puts fruit
puts PI
puts b
# --------------------------

#  Functions

def foo a=0, b=0
  puts "this is a function~!"
  puts "#{a} + #{b} = #{a + b}"
  a + b
end

result1 = foo 9
puts "result:  #{result}"

# if statements

value = 10

if value < 10
  puts 'value is less than 10'
elsif value == 10 
  puts 'value is 10'
else 
  puts 'value is greater than 10'
end

puts ":)" if value == 10
puts 'value is not 0' unless value == 0

# Arrays

array = [1,2,3, 'four', false, [4,5,6]]

puts array.to_s
puts array[3]



array.each_with_index do |num, index|
  puts "pur number at iterator: #{num} #{index}"
end

Objects/hash

obj = {a:1 ,b:2, c:3}

puts obj
puts obj[:a]



obj.each do |key, val|
  puts "key=#{key}    val=#{val}"
end

# Yield

def high_order 
  puts "beginning"
  yield 5
  puts "end"
end


high_order {|num| puts "middle callback :) #{num}"}


# get a timestamp --- new Date()
# fibanachi in yield
# get a timestamp --- new Date()