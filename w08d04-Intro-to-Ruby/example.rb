# Variables

a = 'letter'
fruit = 'apple'
PI = 3.14
# PI = 4

puts a, fruit, PI

# Functions

def foo a=0,b=0,c=0
  puts "a,b,c"
  
  # implicit return
  a + b + c
end

puts foo 

# if statements...

v = 10

if v < 10
  puts "v is less than 10"
elsif v == 10 
  puts "v is 10"
else
  puts "v is greater than 10"
end

# one liner if statements

puts ":)" if true
puts ":(" unless false # if !false


# Arrays

arr = [1,2,3, 'hello', true, [1,2]]

puts arr[3]

arr.each_with_index do |v, i|
  puts "#{i} -- #{v}"
  puts i.to_s + ' -- ' + v.to_s
end



# Objects

obj = {a:1, b:2, c:3} #hashes
obj[:d] = 4
obj["e"] = 5

puts obj
puts obj["e"]

obj.each do |k, v|
  puts "key #{k}, val=#{v}"
end

# Yield (or callbacks )

def high_order 
  puts "start"
  yield(5)
  puts "end"
end


high_order {|num| puts "callback #{num}"}

# You "are" learning ruby
# learning a new language

#  simulation of your first week on the job
# 
#  Tue,wed,thurs,friday 
#  we are giving you a repo/finished project
# Ruby on Rails
# App -- Store, sell items 
#  -- store page
#  -- css
#  payment system
#  database
#  categories
#  