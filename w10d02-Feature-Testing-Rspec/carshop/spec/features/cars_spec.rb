require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js:true do

  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Sedan'),
      trim: Trim.create!(trim_level: 'LE'),
      year: 2001,
      color: 'red'
    )
    @car2 = Car.create!(
      make: Make.create!(make: 'Dodge'),
      model: Model.create!(model: 'Viper'),
      style: Style.create!(body_style: 'coupe'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 2003,
      color: 'blue'
    )
    @car3 = Car.create!(
      make: Make.create!(make: 'Honda'),
      model: Model.create!(model: 'Accord'),
      style: Style.create!(body_style: 'Sedan'),
      trim: Trim.create!(trim_level: 'XE'),
      year: 2009,
      color: 'white'
    )
  end

  scenario 'goes to the cars page' do |variable|
    visit '/cars'
    # by default, screen_shot saves a timestamped snapshot
    # but if you pass a name, it will save it/overwrite that file with that name
    save_screenshot 'test_1.png'
    puts expect(page).to have_text 'All My Cars!'
  end

  scenario 'look at all the cars and see that we have exactly 3 in the list' do
    visit cars_path
    save_screenshot('test_2a.png')
    expect(page).to have_css('.car', count: 3)
  end

  scenario 'page has a prius on the page listing' do
    visit cars_path
    save_screenshot('test_3a.png')
    expect(page).to have_text 'Prius'
  end

  scenario 'visit cars page, click first link then view the show page' do
    visit cars_path
    save_screenshot('test_4a.png')
    first(:link, "More Info").click
    save_screenshot('test_4b.png')
    expect(page).to have_text 'Toyota Prius'
  end

  scenario 'visit cars page, filter toyota, should only have 1' do
    visit cars_path
    save_screenshot('test_5a.png')
    within '.search-form' do
      select 'Toyota', from: 'make'
      click_button 'Search!'
    end

    save_screenshot('test_5b.png')
    expect(page).to have_css('.car', count: 1)
  end

end
