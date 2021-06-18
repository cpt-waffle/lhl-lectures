require 'byebug'

fruit = 'apple'
PI = 3.14
puts 'Fruit ' + fruit
puts 'PI ' + PI.to_s

def method(arg1, arg2, arg3=0, arg4=0, arg5=false, arg6='hi')
    puts 'calculating...'
    arg1 + arg2
end

answer = method(2, 2)
puts answer

val = -3

if val <= 9
    puts 'the val is less than 9'
elsif val == 10
    puts 'the val is exactly 10'
else
    puts 'the val is greater than 10'
end

puts 'AGAIN THE VAL IS 10' if val == 10

falsey_val = false

puts "WTF?" unless falsey_val

array = [1,2,3,4,5]

puts array[-2]

array.each_with_index do |e, i|
    puts "#{e} #{i}"
end

hash = {
    b: 2,
    a: 1,
    c: 3,
    'hello world' => 44
}

puts hash[:a]

hash.each do |key, val|
    puts "#{key} --> #{val}"
end

def yield_example num
    puts '----------'
    puts "num   #{num}"
    yield(num)
    puts 'Line 55'
end

yield_example(33) { |arg0| puts "INSIDE OF CALLBACK  #{arg0}"}


# to initialize we use the command called 
# bundle init
# to install a gem simply put gem 'GEM_NAME' isnide of
#  your Gemfile and run bundle install