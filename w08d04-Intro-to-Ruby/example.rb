foo = 123
PI = 3.14

puts "Hello World #{PI.to_s}"
puts "#{foo} #{PI}"

def greetings name
    puts 'Hello There!'
    puts "General #{name}..."
    name
end

a = greetings 'Kenobi'
puts a

VAL = 10

if VAL <= 9
    puts 'it might be 9 o clock...'
elsif VAL == 10
    puts 'its 10 clock'
else
    puts 'its past 10....'
end

puts "YAY!" if true

puts 'it wasnt false' unless false

if true 
   puts "YAY"
end

unless false
    puts "it wasnt false"
end

for counter in 0..10
    puts counter
end

arr = [1,2,3,4,5]

arr.each_with_index do |val, i|
    puts "Val is => #{val} #{i}"
end

arr.each {|val| puts val }

obj = {
   a: [1,2],
   b: [3,4] 
}

obj_copy = obj.clone

obj_copy[:a].push(3)

puts obj
puts '---------------'
puts obj_copy


obj.each do |key, val|
    puts "#{key}" + " " + "#{val}"
end

def yield_example
    puts "before cb"
    yield
    puts "after cb"
end

yield_example { puts "YIELD RUNNING!"}