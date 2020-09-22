## Add rspec to group :development do

```ruby
gem 'rspec-rails'
```

## Create rspec files

'rails g rspec:install'


## Generate Models and migrations

rails g model Make make:string
rails g model Model model:string
rails g model Trim trim_level:string
rails g model Style body_style:string
rails g model Car make:references model:references year:integer trim:references style:references color:string

add 'force: true, cascade: true' to Car migration


## MIGATE

```bash
rake db:migrate
```

## install shoulda-matchers

put this  to gemfile test group

```ruby
gem 'shoulda-matchers'
```

put this at end of /spec/rails_helper.tb

```ruby
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```


One test for shoulda-matchers

```ruby
require 'rails_helper'

RSpec.describe Make, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should validate_presence_of(:make) }
end
```

```ruby
validates :make, presence: true
```

## Add FAKER

```ruby
gem 'faker'
```

```bash
bundle install
```

Add Seeds

```ruby
require 'faker'

puts "creating makes..."
5.times do
  Make.create!(make: Faker::Vehicle.make)
end

puts "creating models..."
5.times do
  Model.create!(model: Faker::Vehicle.model)
end

puts "creating trims..."
5.times do
  Trim.create!(trim_level: Faker::Vehicle.style)
end

puts "creating styles"
5.times do
  Style.create(body_style: Faker::Vehicle.car_type)
end

makes = Make.all.uniq.to_a
models = Model.all.uniq.to_a
styles = Style.all.uniq.to_a
trims = Trim.all.uniq.to_a

puts "creating cars..."
# Creating 50 random cars
50.times do

  Car.create!({
    make: makes.sample,
    model: models.sample,
    style: styles.sample,
    trim: trims.sample,
    year: rand(1950..2019),
    color: Faker::Color.color_name.capitalize,
  })
end

```


## Generate Controller

```bash
rails g controller cars index
```


## ADD index.html.erb

```erb
<h1>All My Cars!</h1>

<div class="search-form" id="search-form">
  <%= form_tag({controller: :cars, action: :index}, method: :get) do %>

    <div class="form-component">
      <%= label_tag(:make, 'Make ') %>
      <%= select_tag(:make,
                     options_from_collection_for_select(Make.all, :id, :make),
                     include_blank: true) %>
    </div>

        <div class="form-component">
      <%= label_tag(:model, 'Model ') %>
      <%= select_tag(:model,
                     options_from_collection_for_select(Model.all, :id, :model),
                     include_blank: true) %>
    </div>

    <div class="form-component">
      <%= label_tag(:style, 'Style ') %>
      <%= select_tag(:style,
                     options_from_collection_for_select(Style.all, :id, :body_style),
                     include_blank: true, id: 'bicycle-style') %>

    </div>

    <div class="form-component">
      <%= label_tag(:trim, 'Trim ') %>
      <%= select_tag(:trim,
                     options_from_collection_for_select(Trim.all, :id, :trim_level),
                     include_blank: true) %>
    </div>

    <div class="form-component">
      <%= label_tag(:year, 'Year ') %>
      <%= number_field_tag(:year, nil, min: 1950, max: 2019) %>
    </div>


    <div class="form-component">
      <%= submit_tag('Search!') %>
    </div>
  <% end %>
</div>

<section class="car-list" id="car-list">
  <% @cars.each do |car| %>
    <div class="car">
      <h3 class="description"><%= car.description %></h3>
      <p class="details">
        <strong>Make:</strong> <%= car.make.make %> |
        <strong>Model:</strong> <%= car.model.model %> |
        <strong>Trim:</strong> <%= car.trim.trim_level %> |
        <strong>Style:</strong> <%= car.style.body_style %> |
        <strong>Year:</strong> <%= car.year %>
        <strong>Color:</strong> <%= car.color %>
      </p>
    </div>
  <% end %>
</section>
```



## Create our first feature spec




```bash
rails g rspec:feature cars
```

### Gets Created 
cars_spec.rb

### Add js true
RSpec.feature "Cars", type: :feature, js:true do
                                          ^---------------------DO THAT 
