foo = 20
PI = 3.14

puts "foo: " + foo.to_s
puts "PI #{PI}"

def method(arg1, arg2=0, arg3=0, arg4=0, arg5=0, arg6=0, arg7=0)
    puts "arg1"
    puts arg1
end

method('hello',1,2,3,4,5,6)

val = 10

if val <= 9
    puts 'it was less than 9'
elsif val == 10
    puts 'val is 10 exactly!'
else
    puts 'val is greater than 10!!'
end

puts 'it was 10!!' if val == 10

puts 'it was not less than 4' unless val < 4


arr = [1,2,3,4,5]

puts arr.to_s

arr.each_with_index do |elem, index|
    puts "---> #{elem}  #{index}"
end


obj = {
    a: 1,
    b: 2,
    'hello': [1,2,3,4]
}
key = :hello

a = obj[key]
a.push(5)

puts obj




obj.each do |key, val|
    puts 'val -> '
    puts obj[key].to_s 
end

def yield_example arr
    puts "---- array loop -----"
    arr.each_with_index do |elem, i|
        yield(elem, i)
    end
end

yield_example([1,2,3,4,5]) {|item, i| puts "value is #{item} at index #{i}"}


#  start timer
#  yield <--- run your function 
#  stop timer
#  check how long your function took to execute


