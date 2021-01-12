writting TESTS for capybara!!

first thing visting the page

```ruby
scenario 'display the cars page' do |variable|
	visit cars_path
	save_screenshot('cars_page.png')
	expect(page).to have_text('All my Cars!')
end
```

Nothing in the database ( because its running the test database!! we have to seed it as well) with 

Create `spec/support` folder and a file `database_cleaner.rb`

```ruby
 
RSpec.configure do |config|

  config.before(:suite) do
    if config.use_transactional_fixtures?
      raise(<<-MSG)
        Delete line `config.use_transactional_fixtures = true` from rails_helper.rb
        (or set it to false) to prevent uncommitted transactions being used in
        JavaScript-dependent specs.
  
        During testing, the app-under-test that the browser driver connects to
        uses a different database connection to the database connection used by
        the spec. The app's database connection would not be able to access
        uncommitted transaction data setup over the spec's database connection.
      MSG
    end
    DatabaseCleaner.clean_with(:truncation)
  end
  
  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end
  
  config.before(:each, type: :feature) do
    # :rack_test driver's Rack app under test shares database connection
    # with the specs, so continue to use transaction strategy for speed.
    driver_shares_db_connection_with_specs = Capybara.current_driver == :rack_test
  
    if !driver_shares_db_connection_with_specs
      # Driver is probably for an external browser with an app
      # under test that does *not* share a database connection with the
      # specs, so use truncation strategy.
      DatabaseCleaner.strategy = :truncation
    end
  end
  
  config.before(:each) do
    DatabaseCleaner.start
  end
  
  config.append_after(:each) do
    DatabaseCleaner.clean
  end
  
end
```


```ruby
require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js:true do

  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 1985,
      color: 'Coriander'
    )

    @car2 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'Esi'),
      year: 2000,
      color: 'Lavender'
    )

    @car3 = Car.create!(
      make: Make.create!(make: 'Dodge'),
      model: Model.create!(model: 'Accord'),
      style: Style.create!(body_style: 'Hatchback'),
      trim: Trim.create!(trim_level: 'XLE'),
      year: 1975,
      color: 'Purple'
    )
  end

  scenario 'display the cars page' do
    visit cars_path
    save_screenshot('cars_page.png')
    expect(page).to have_text('All My Cars!')
  end

  scenario("Get the list of the all the cars") do

    visit cars_path

    save_screenshot("all_cars.png")

    expect(page).to have_css('.car', count: 3)
    expect(page).to have_text("Toyota Prius Extended Cab Pickup XL")
  end

  scenario 'page has a prius on the page listing' do
    visit cars_path
    save_screenshot('test_3a.png')
    expect(page).to have_text 'Prius'
  end

  scenario "pick a car and show more info" do
    visit cars_path
    save_screenshot("pick_car1.png")
    first(:link, "More Info").click
    sleep(1)
    save_screenshot("pick_car2.png")
    expect(page).to have_text("Specific Car")
  end

  scenario("Filtering the cars according to the make") do


    visit cars_path

    within '.search-form' do

      select 'Dodge', from: 'make'
      click_button 'Search!'

    end

    expect(page).to have_css('.car', count: 1) 
    save_screenshot('filter_cars.png')
    expect(page).to have_text("Accord")
  end

end

```