require 'rails_helper'
require 'support/database_cleaner'
# thinking back to cypress time
# remember you had to run scheduler-api in TEST MODE



#  add js:true to the bottom line below, after :feature
RSpec.feature "Cars", type: :feature, js: true do
  before :each do
    @car1 = Car.create(
      make:  Make.create(make: 'Toyota'),
      model: Model.create(model: 'Prius'),
      style: Style.create(body_style: 'Sedan'),
      trim: Trim.create(trim_level: 'XL'),
      year: 2004,
      color: 'blue'
    )
    @car2 = Car.create(
      make:  Make.create(make: 'Toyota'),
      model: Model.create(model: 'Prius'),
      style: Style.create(body_style: 'Hatchback'),
      trim: Trim.create(trim_level: 'LE'),
      year: 2020,
      color: 'red'
    )
    @car3 = Car.create(
      make:  Make.create(make: 'Dodge'),
      model: Model.create(model: 'Viper'),
      style: Style.create(body_style: 'Sedan'),
      trim: Trim.create(trim_level: 'S'),
      year: 2000,
      color: 'blue'
    )
  end

  # we visit the cars page
  it 'visits our cars page' do
    visit cars_path
    # screenshot lives in tmp/capybara/
    save_screenshot 'test1.png'
  end

  it 'visits the cars page, and checks if there is title' do
    visit cars_path
    save_screenshot 'test2.png'
    expect(page).to have_text(/All my Cars!/i)
  end

  it 'picks a car, and shows a more info page' do
    visit cars_path
    save_screenshot 'test3_a.png'
    # clicks first link
    click_link('Info', match: :first)
    save_screenshot 'test3_b.png'
    expect(page).to have_text(/Specific Car/i)
    # takes a screenshot of a new page
    # expect to see a text that says "Specific Car"
  end

  it 'visits home page, and checks that it has 3 cars on it' do
    visit cars_path
    expect(page).to have_css('.car', count: 3)
  end

end
