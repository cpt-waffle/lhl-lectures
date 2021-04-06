require 'rails_helper'
require 'support/database_cleaner'



RSpec.feature "Cars", type: :feature, js:true do

  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: "Toyota"),
      model: Model.create!(model: "Prius"),
      style: Style.create!(body_style: "Sedan"),
      trim: Trim.create!(trim_level: 'LE'),
      year: 2003,
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


  scenario 'display the cars page' do |variable|
    puts " ------------>  #{variable}"
    visit cars_path
    save_screenshot 'test1_homepage.png'
    expect(page).to have_text(/All my Cars!/i)
  end

  scenario 'display the cars page, and see 3 cars on that page' do |variable|
    puts " ------------>  #{variable}"

    visit cars_path
    save_screenshot 'test2_homepage.png'
    expect(page).to have_css('.car', count: 3)
  end

  scenario 'go to home page, click a link for one of the cars, go to the info page' do |variable|
    visit cars_path
    save_screenshot 'test3_homepage.png'
    click_link('More Info', match: :first)
    save_screenshot 'test3_showpage.png'
    expect(page).to have_text(/Toyota/i)
    # click on a link
  end
end
