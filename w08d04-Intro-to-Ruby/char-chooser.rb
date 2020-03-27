# const printUser = (user) {
#     console.log(user)
# }

require 'byebug'

def pickChar(num)
    yield num
    char = ''
    # byebug
    if num.class == String
        puts 'not a valid character'
    elsif num == 1
        char = 'Warrior'
    elsif num == 2
        char = 'Wizard'
    elsif num == 3
        char = 'Druid'
    else
        char = 'Bard'
    end
    char
end


puts pickChar(1) {|n| puts "picking character for number #{n}" }
