foo = 'bar'
PI = 3.14
require 'byebug'
# they are types - they are of a class
def greetings name
    puts "Hello #{name}"
    puts "Hello " + name.to_s
    4 * 4
end

# greetings 'Vas'
# puts greetings 1334
# greetings 1334, 'vas', false, 54, 5 ,6

# RUBY has AWESOME HELPER METHODS
# array = Array 0..100
array = []
array.push 1
array.push 2
array.push 3

# puts array.first
# puts array.last
# JSON.stringify(...)
# puts array.inspect

val = 5

if val > 5 
    # puts 'GREATER THAN'
elsif val == 5
    # puts 'EQUAL'
else
    # puts 'LESS THAN'
end

if true
    # ...
end

# puts "its 5!!" if val == 5
# puts "its not 4!" unless val == 4 # if !________

obj = {A: 1, B: 2, C: 3} # hash
obj2 = {:A => 1, :B=> 2, :C => 3}

# puts obj
# puts obj[:A]
# puts obj2[:A]


#  array looping

array.each_with_index do |val, index|
    # puts "#{val} #{index} #{array.inspect}"
end

obj.each do |key, val|
    # puts '---->' + key.inspect
    # puts '-V-->' + val.inspect
end

def sampleFunc
    puts 'BEFORE CALLBACK'
    yield
    puts 'AFTER CALLBACK'
end


# sampleFunc { puts "RUNNING SOMETHING IN THE MIDDLE" }

class Person
    # constructor
    def initialize(name,age)
        @name = name
        @age = age
    end

    # methods...
    def print_name
        puts "my name is " + @name.inspect
    end
end

p1 = Person.new 'Vasily', 29
p2 = Person.new 'Martha', 29
p3 = Person.new 'Tom', 29
p1.print_name



puts p3.inspect