fruit = 'apple'
PI = 3.14

puts fruit 
puts PI

puts fruit + PI.to_s
puts "#{fruit} #{PI}"

def foo bar
    puts "BAR #{bar}"
    22 # implicit return --> last line of code in a block, gets returned
end

foo
result1 = foo ':)'
puts result1

result = 10

if result < 10
    puts "result is less than 10"
elsif result == 10 
    puts "result is 10"
else
    puts "result is greater than 10"
end

puts ":)" if result == 10
puts "it wasn't false" unless false

arr = [1,2,3,4,'five', 'six', true, false]
puts arr.inspect






arr.each_with_index do |elem, index|
    puts "elem #{elem} #{index}"
end
# hashes
obj = {a: 1, b:2, c: 3}
puts obj
puts obj[:a]



obj.each do |k,v|
    puts "symbol: #{k}, value: #{v}"
end

def high_order
    puts "START"
    yield 25
    puts "END"
end

high_order { |num| puts "CALLBACK RAN!! #{num}" }