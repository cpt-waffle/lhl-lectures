fruit = 'apple'
PI = 3.14

# PI = 4
# puts fruit 
# puts PI

def foo bar
    puts "BAR #{bar}"
    b = 3 + 3 
end




# x = foo ':)'
# puts x

##################################

# puts fruit + PI.to_s

##################################

# result = 10

# if result < 10 
#     puts "result is less than 10"
# elsif result == 10 
#     puts "result is 10"
# else
#     puts "result is more than 10"
# end

# puts ":)" if true
# puts "runs if false!" unless false

####################################

arr = [1,2,3,4, 'five', 'six', true, false, ['h', 'e']]

puts arr.to_s






arr.each_with_index do |val, index|
    puts index
    puts val
end

#######################################

obj = {a:1, b:2, c:3}

puts obj
puts obj[:b]

obj.each do |k, v| 
    puts "k=#{k}      v=#{v}"
end

##################################

def high_order 
    puts "START"
    yield 25
    puts "END"
end

high_order {|v| puts "MIDDLE - v is = #{v}" }

