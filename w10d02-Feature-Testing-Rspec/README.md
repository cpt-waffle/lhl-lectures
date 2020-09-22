## W10D02 - Feature Testing with RSpec and Capybara

Today we'll be talking about rails testing ( mostly capybara ).

As we know there are alot of different types of tests, but today we will be focusing on end to end testing in rails. 
Unlike the end to end testing we did in react with Cypress, since rails has server side rendering, we will just need to run the 
rails server to perform these tasks.

### End to End Testing Overview

 - tests your buisness logic ( user stories )
 - mimics a user/client
 - checks if feature requirements have been completed

Drawback of End to End are:

 - Performance: running unit tests is much more efficient than end to end testing
 - Cost: running a seperate server just for the end to end tests is costly ($$)

## Capybara 

We'll be using the Capybara testing tool which emulates a client as end to end test. It will allow us to spool up a server, click on various UI elements, and check assertions against actual pages.

## Installation

Checkout:

1 - installation_notes.md 
2 - capybara_installation_notes.md

## Sample Demo Tests Written

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