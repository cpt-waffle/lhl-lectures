require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js: true do


  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Sedan'),
      trim: Trim.create!(trim_level: 'LE'),
      year: 2002,
      color: 'Red'
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
  # pending "add some scenarios (or delete) #{__FILE__}"
  xscenario 'display the cars page' do
    # we are going to be looking into the Capybara cheatsheet to help us out!
    visit cars_path
    # if page is blank screenshot or screenshot you expect does not go to the next page
    # try adding sleep(1)
    sleep(1)
    save_screenshot('test1.png')
    expect(page).to have_text(/All my Cars!/i)
  end

  xscenario 'pick a car and show more info' do
    visit cars_path
    # first(:link, 'More Info').click
    save_screenshot('test2a.png')
    click_link('More Info', match: :first)
    save_screenshot('test2b.png')
    expect(page).to have_text(/Toyota/)
  end

  scenario 'we should have 3 cars on the home page' do
    visit cars_path
    save_screenshot('test3.png')
    expect(page).to have_css '.car', count: 3 
  end

end
