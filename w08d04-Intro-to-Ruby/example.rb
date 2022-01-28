require 'byebug'

fruit = 'apple'
PI = 3.14
num = 12

puts "#{fruit}, #{PI}, #{num}"
puts fruit + ' ' + PI.to_s

def add num_one=0, num_two=0
    num_one + num_two
end

puts add(2, 4) 

# if statements ------

val = 10

if val < 9
    puts 'Value is less than 9'
elsif val == 10
    puts 'Value is 10'
else
    puts 'Val is greater than 10'
end

puts 'if true' if true
puts "hello world :)" unless false

arr = [1,2,3,4,5,6, 'seven', 8.5, false]
puts arr.to_s

# # there are for, while, .each methods
# #  but mostly used is the .each

arr.each_with_index do |item, index| 
    puts "#{item} -- #{index}"
end

puts arr[3]

# ------ Objects

obj = {
    a: 1, 
    b: 2,
    c: 3
}

puts obj
puts obj[:b]

obj.each do |key, val|
    puts "#{key} --  #{val}"
end

#  Rails equivalent of callbacks YIELD
def foo
    puts "START"
    yield 33, 22
    puts "END"
end

foo { |num, num2| puts "CALLBACK RUNS " + num.to_s + num2.to_s }