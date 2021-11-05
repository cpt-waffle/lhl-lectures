# variables

fruit = 'apple'
num = 12
PI = 3.14

puts fruit, num, PI



def addFour arg0, arg1, arg2, arg3
    puts 'Calculating...'
    puts arg0 + arg1 + arg2 + arg3
    # ruby implicit returns....
    arg0 + arg1 + arg2 + arg3
end

value = addFour 2, 2, 2, 2
puts "Value---  #{value}"



val = 10

if val < 9
    puts 'Value is less than 9'
elsif val == 10
    puts 'Value is exactly 10'
else
    puts 'Value is greater than 10'
end

puts 'true' if true

puts 'value is false' unless !true


# arrays

arr = [1,2,3,4]

puts arr.to_s



arr.each_with_index do |val, index|
    puts "index is #{index}, val => #{val}"
end

# Objects ( but not really because its called
#  something else)

obj = {
    a:1,
    b:2,
    c:3,
    'D is': 4
}

# puts obj

#  only way to access value of a hash
puts obj[:a]
# no such thing as dot notation
# --

obj.each do |key, val|
    puts "key is #{key}"
    puts "val is #{val}"
    puts "-------------"
end

#  Yield ( sort of like a cb )

def high_order
    puts "START"
    yield 33
    puts "END"
end

high_order {|a| puts "~~~ CALLBACK RUNS~~~#{a}"}

# Activity to Benchmark the Fibonacci
# function

