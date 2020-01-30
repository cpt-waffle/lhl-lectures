class Human
  attr_accessor :human_name
  attr_reader :age

  def initialize(name, age)
    @human_name = name
    @age = age
  end
end



me = Human.new('Vasiliy', 28)
you = Human.new('Paul', 31)
i = Human.new('TEST', 1)


me.human_name = 'Clark'

puts me.human_name
puts me.age
# puts you.inspect
# puts i.inspect
