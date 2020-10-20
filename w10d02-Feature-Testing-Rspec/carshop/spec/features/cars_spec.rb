require 'rails_helper'

# require database_cleaner which will erase database on each test!
require 'support/database_cleaner'

#                                      DONT FORGET JS:TRUE
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
        save_screenshot 'test-1.png'
    end

    scenario 'get the list of all the cars that are on the page' do
        visit cars_path
        save_screenshot 'test-2.png'
        expect(page).to have_css('.car', count: 3)
    end

    scenario 'go to cars page, click on more info for first car to show info' do
        visit cars_path
        # save_screenshot 'test-3a.png' 
        # find something without a class just by the value
        # first(:link, 'More Info').click
        # find something by class
        first('.more-info-link').click
        # sleep(1) not the most correct way buuut if your screenshot is not syncing correctly add this in
        save_screenshot 'test-3b.png'
    end

    scenario 'go to homepage and filter Dodge' do
        visit cars_path
        select 'Dodge', from: 'make'
        save_screenshot 'test4a.png'
        click_button 'Search!'
        save_screenshot 'test4b.png'
        expect(page).to have_css('.car', count: 1)
    end
end