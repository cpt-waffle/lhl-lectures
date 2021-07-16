# RB
require('byebug')

fruit = 'apple'
PI = 3.14
puts 'Fruit ' + fruit
puts 'PI ' + PI.to_s
puts "PI = #{PI}  FRUIT = #{fruit}"

def method param1, param2, param3=0, param4=true, param5='hi'
    puts 'calculating...'
    param1 + param2  # show more than 1 liner return...
end

puts method 2, 2

val = 10

if val <= 9
    puts 'the val is less than or equal to 9'
elsif val == 10 
    puts 'val is 10!'
else
    puts 'its greater than 10'
end

puts 'this was true!' if true

puts "this is not true" unless !true



arr = [1,2,3,4,5]
puts arr[2]
def loop array
    array.each_with_index do |elem, index|
        puts "Elem: #{elem}   at index =  #{index}"
    end

end

v = loop(arr)
puts '------------'
puts v.to_s

hash = {
    a:1,
    b:2,
    c:3
}

puts hash[:b]

def yield_example
    puts 'yield function running...'
    yield(33)
    puts 'end'
end

yield_example() { |param| puts 'cb running!' + param.to_s }