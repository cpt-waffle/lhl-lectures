fruit = 'apple'
PI = 3.14

puts fruit
puts PI

puts fruit + ' ' + PI.to_s
puts "#{fruit}  --- #{PI}"

def foo arg
    puts "BAR! #{arg}" 
    # implicit return 
    22
end

val = foo 10
puts val

result = 10

if result < 10
    puts "result is less than 10"
elsif result == 10 
    puts "result is 10"
else 
    puts "result is greater than 10"
end

puts "one line true!" if result == 10
puts "IT WORKS!" unless false # if ! 

arr = [1,2,3,4, 'five', 'six', 7.5, false];

arr.each do |num|
    puts "Value is ==#{num}"
end

obj = {a:1, b:2, c:3}
puts obj[:b]
obj.each do |k,v|
    puts "#{k} ==> #{v}"
end

def high_order
    puts "START"
    yield 25
    puts "END"
end

high_order { |num| puts "CALLBACK RAN!! #{num}" }
