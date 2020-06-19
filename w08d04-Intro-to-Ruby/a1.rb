Pizza = 'BBQ Chicken Feast'
require 'pry'

# puts Pizza
# there are alot of shorthands (faster way to write stuff)
# Arr = Array 1..10


# def printArr arr 
#     # code goes here....
    
#     arr.each do |elem|
#         puts "The element is #{elem.to_s}"
#     end
# end

# printArr Arr


# the equivalent of Objects in ruby is "hashes" or "hash"
# instead of keys, hashes have symbols, and symbols connect to values.

def count_chars(str)
    chars = str.split('')

    result = {}
    # puts result['h'.to_sym]
    # result['e'.to_sym] = 2
    # result[:e] = 2


    chars.each do |letter|

        # puts letter
        if result[letter.to_sym] == nil
            result[letter.to_sym] = 1
        else
            result[letter.to_sym] += 1
        end
    end
    yield

    return result
end

#  Yield example (small one)
puts count_chars('hello') { puts "Function has finished executing"}