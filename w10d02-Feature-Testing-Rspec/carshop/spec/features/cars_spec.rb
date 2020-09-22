require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js: true do
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
    visit '/cars'
    save_screenshot 'cars_home.png'
    expect(page).to have_text "All My Cars!"
    expect(page).to have_css ".car-list"
  end

  scenario 'go to home page and visit the first car descriptipn page' do 
    visit '/cars'
    expect(page).to have_text "All My Cars!"
    save_screenshot 'test2-home_page.png'
    first(:link, 'More Info').click
    sleep(1)
    save_screenshot 'test2-details_page.png'
    expect(page).to have_text "Specific Car"
  end

  scenario 'go to homepage and find Dodge' do
    visit '/cars'
    save_screenshot 'test3-home_page1.png'
    within '.search-form' do
      select 'Dodge', from: 'make'
      click_button 'Search!'
    end
    save_screenshot 'test3-home_page2.png'
    expect(page).to have_text 'Accord'
  end

end
