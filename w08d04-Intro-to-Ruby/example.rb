fruit = 'apple'
num = 44
PI = 3.14

# puts fruit, num, PI
# creating a function
def add_three arg0, arg1, arg2, arg3=0, arg4=0, arg5=0
    puts 'Calculating....'
    # in ruby, the last line, will be returned automatically -- implict return
    arg0 + arg1 + arg2
end

# puts add_three 5, 5, 5, 5, 5, 5


# val = 10

# if val < 9
#     puts "value is less than 9"
# elsif val == 10
#     puts "value is 10"
# else
#     puts "value is greater than 10"
# end

# puts "this is true!!" if true
# # unless = if !
# puts "NOT TRUE" unless !true 

# template literals
number = 3
name = "Paul"

# puts "#{name} - #{number.to_s}"

arr = [1,2,3,4,5,6,7,8,9,10]

# puts arr[3]



# arr.each_with_index do |e, i|
#     puts "Index at ==>" + i.to_s
#     puts "Elem is -> " + e.to_s
# end

obj = {
    a:1,
    b:2,
    c:3,
    "hello world" => 33
}

# puts obj
# puts obj[:a]
# puts obj[:b]
# puts obj['hello world']

# obj.each do |aa, vv|
#     puts "#{aa} ===#{vv}"
# end

def high_order
    puts "START"
    yield
    puts "END"
end

high_order() {|a| puts "CALLBACK RUNS!!"}