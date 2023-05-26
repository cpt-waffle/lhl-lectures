# let obj = { name: vasiliy, age: 28} Javascript

# obj = { :name => vasiliy, :age => 28 } Ruby

class Human
  attr_accessor :name, :age
  def initialize name, age
    @name = name
    @age = age
    age_two = age
    puts "Im using the constructor"

  end

  def func
    7 + 2
  end

  # def name= new_name
  #   @name = new_name
  # end

  def printMe(msg)
    puts "#{@name} #{@age}"
    puts msg
    puts "Function ended"
  end
end
# class App extends Component
class Knight < Human
  def initialize name, age, hp, atk
    super(name, age)
    @hp = hp
    @xatk = atk
  end

  def b
    puts "BBBB"
  end

  def printMe
    puts "SUPER NAME #{func}"
    super("GOING TO USE THAT YIELD")
    puts "Greetings!! My name is #{@name}"
  end
end

warrior = Knight.new 'Sir Vasiliy Van Morpheos', 23, 50, 9001
warrior_two = Knight.new 'Luke Skywalker', 19, 12, 7000



warrior.printMe


class Battle
  def initialize p1, p2
    @p1 = p1
    @p2 = p2
  end

  def p1_attack
    puts "#{@p1.name} ATTACKS WITH HIS AXE!!!!"
  end

  def why_is_this
    arr = [1,2,3,4,5]
    arr.each do |number|
      puts number
    end
  end
end

#fight = Battle.new(warrior, warrior_two)

# puts fight.inspect

# puts fight.why_is_this.class

# wierd syntax with if statement
puts "IT IS TRUE" if true