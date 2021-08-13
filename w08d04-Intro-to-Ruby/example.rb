# there is no such thing as let var or const, you just
# make variable without a prefix

fruit = 'apple'
fruit2 = 'banana'
PI = 3.14

# puts fruit, fruit2, PI

#  creating a function
def add_two(num_one, num_two, num_three = 0, num_four = 0)
    puts 'Calculating....'
    num_one + num_two
end

# puts add_two(2,2)

# val = 10

# if val <= 9
#     puts 'val is less than 10'
# elsif val == 10
#     puts 'val is 10'
# else
#     puts 'val is greater than 10'
# end

# puts 'its true' if true

# puts 'this is not true' unless !true

arr = [1,2,3,4,5,6,7,8,9,10]


# arr.each_with_index do |elem, index|
#     puts "elem #{elem} at index #{index}"
# end

# object in ruby are called Hashes
# a symbol(key) and a value (value)
obj = {
    a:1,
    b:2,
    c:3
}

puts obj[:a]

# obj.each do |key, val|
#     puts "key name #{key}  value = #{val}"
# end

def high_order
    puts 'start'
    yield(33)
    puts 'finish'
end

high_order() {|num| puts 'cb is running' + num.to_s}

# make a timstamp of now
# yield
# make a timestamp of now (again)
# subtract old time-stamp with new time-stamp = 
# how many seconds did the yield function run?