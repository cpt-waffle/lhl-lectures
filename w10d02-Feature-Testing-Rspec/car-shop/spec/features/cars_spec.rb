require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js: true do

  before :each do
    Car.create(
      make: Make.create(make: 'Toyota'),
      model: Model.create(model: 'Prium'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 1985,
      color: 'Coriander'
    )
    Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'Esi'),
      year: 2000,
      color: 'Lavender'
    )
    Car.create!(
      make: Make.create!(make: 'Dodge'),
      model: Model.create!(model: 'Accord'),
      style: Style.create!(body_style: 'Hatchback'),
      trim: Trim.create!(trim_level: 'XLE'),
      year: 1975,
      color: 'Purple'
    )
  end

  scenario 'visit the cars page' do |variable|
    visit cars_path
    save_screenshot('cars_page.png')
    expect(page).to have_text(/All my Cars!/i)
  end

  scenario 'visit car page and make sure there are 3 cars on the page' do |variable|
    visit cars_path
    save_screenshot('test2_cars_page.png')
    # expect(page).to have_css('.car')
    expect(page).to have_css('.car', count: 3)
  end

  scenario 'visit page and see if we have a preium' do |variable|
    visit cars_path
    expect(page).to have_text(/prium/i)
  end

  scenario 'visit page, click on first link, verify that it we get to the show page' do |variable|
    visit cars_path
    save_screenshot('test4_home.png')
    first('.more-info-link').click
    save_screenshot('test4_show.png')
  end

end
