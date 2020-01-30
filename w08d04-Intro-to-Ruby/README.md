#### Ruby OOP

First we talked about a quick comparison on `JS` vs `Ruby/Rails`

#### Comparison between Ruby and JS ( table made by Dominic-Tremblay )

| JavaScript/NodeJS                     | Ruby/Rails                                                  |
| :------------------------------------ | :---------------------------------------------------------- |
| - Created in 10 days in 1995          | - Ruby was released in 1995 but took off with Rails in 2005 |
| - Created by Brendon Eich (Netscape)  | - Created by Yukihiro Matsumoto (Matz).                     |
|                                       | - Rails was released by David Heinemeier Hansson (Basecamp) |
| - Can run on both front and back ends | - Can only run on the back-end                              |
| - Syntax inspired by C and Java       | - Simplified, unclutered Syntax                             |
| - Primitive data types + object       | - all types are objects                                     |
| - More low level                      | - High-level of abstractions                                |
| - Highly-performant                   | - Performance issue                                         |
| - Very flexible                       | - Very opinionated                                          |
| - Not so easy to use migrations       | - Easy to use migrations                                    |
| - Fairly good for rapid development   | - Excellent for rapid prototyping and development           |
| - Multi-paradigm, event-driven        | - Mostly object-oriented                                    |
| - Largest ecosystem (npm)             | - Fairly big ecosystem (Rubygems)                           |
| - Very active community               | - Established community                                     |
| - Asynchronous                        | - Synchronous                                               |


#### First Steps and PitFalls

All Data-types in are objects based on classes. You got your usuals.

##### booleans

```ruby
a = true
```

##### strings

```ruby
greetings = 'hello world'
```

##### arrays

```ruby
arr = [1,2,3,4,5]
# or another way
arr = Array (1..5) # shorthand
```

##### integers

```ruby
number = 1
number += 2
```

##### hash

```ruby
hash = { color: 'green', number: 5 }

hash.keys.each do |key|
  puts hash[key]
end

# OR

hash = { 'color' => 'green', 'number' => 5 }
```

Ruby brackets are usually optional when it comes to using methods or passing arguments

```ruby
def print val, va2
  puts "#{val}, #{val2}"
end

print 1, 2

# or

print(3,4)

```

#### BONUS MATERIAL

#### What is a Class?
A blueprint of something. Think about us as people. We are all dervied from class `Person`. Each person has eyes, legs, arms, etc. Also Person class maybe has methods such as, talk, or communicate, see, walk, heal, etc.

```ruby
class Human
end
```


#### What's the difference between a class and an object?
An object is an INSTANCE of a class.
Ruby object !== JS object. Ruby objects are more strict.

Intialize Method is just a constrcutor for your class. It makes an instance of the class

```ruby
class Human
  #remember brackets can be added but not manditory because ruby doesn't need them :)
  def initialize name, age, health
    # ...
  end
end
```


#### What are Instance variables and how are they used?
Ruby's version of this. Uses the `@` symbol (also refered to as properties of the class). Instance variables become private. You need to make acessor and mutator functions to either use or overwrite thouse variables.

```ruby
class Human
  def initialize name, age, health
    @name = name
    @age = age
    @attack = 2
    @health = health
  end
end
```

#### What are attribute accessors and readers?
Allow the instance to EXPOSE variables (either to read or manipulate)

```ruby
class Human

  attr_accessor :name, :age, :health # now I dont have to write custom functions for these variables to be accessed or mutated

  # other methods and functions bellow . . . .
```
Difference between `attr_accessor`, `attr_reader`, `attr_writer`
```ruby
  attr_accessor # read and write
  attr_writer   # only write
  attr_reader   # only read
```

#### Inheritence
If a class inherits another class, that class gets all the functions and instance variables of that class

```ruby
class Knight < Human # Knight has all functions and properties of the Human class
```

If parent class has a function name as the child class, then child will overwrite the parents function.

```ruby
  class Human
    # ...
    def hello
      puts "Hi"
    end
  end

class Knight < Human
    # ...
    def hello # parent method overwritten by this one.
      puts "Greetings Traveller"
    end
  end
```

To call the method of the parent of the same function name, just write the word `super`

```ruby
  class Human
    # ...
    def hello
      puts "Hi"
    end
  end

class Knight < Human
    # ...
    def hello
      super # calls hello method from the Human class
    end
  end
```


#### Yield (Bonus)

We use yield to execute a function that was passed into the function ( kind of like a callback from javascript :D )
```ruby
  def print_stars
    puts "*********"
    yield
    puts "*********"
  end

  print_stars { puts 'Sandwich'}
  # prints out
  # *********
  # Sandwich
  # *********
```


