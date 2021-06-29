require 'rails_helper'
require 'support/database_cleaner'




# Add after feature ", js: true"
RSpec.feature "Cars", type: :feature, js:true  do
  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model:Model.create!(model: "Prius"),
      style: Style.create!(body_style: "Coupe"),
      year: 2003,
      color: 'red',
      trim: Trim.create!(trim_level: 'SE')
    )
    @car2 = Car.create!(
      make: Make.create!(make: 'Honda'),
      model:Model.create!(model: "Civic"),
      style: Style.create!(body_style: "Coupe"),
      year: 2003,
      color: 'yellow',
      trim: Trim.create!(trim_level: 'SE')
    )
    @car3 = Car.create!(
      make: Make.create!(make: 'Nissan'),
      model:Model.create!(model: "400z"),
      style: Style.create!(body_style: "Coupe"),
      year: 2003,
      color: 'blue',
      trim: Trim.create!(trim_level: 'R')
    )
    @car4 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model:Model.create!(model: "Supra"),
      style: Style.create!(body_style: "Coupe"),
      year: 2004,
      color: 'blue',
      trim: Trim.create!(trim_level: 'R')
    )
  end
  scenario 'display the cars page' do |variable|
    visit cars_path # /cars
    # save screen shot
    save_screenshot('test_1.png')
    expect(page).to have_text(/All my Cars!/i)
  end

  scenario 'list all of the cars' do 
    visit '/cars'
    save_screenshot('test_2.png')
    expect(page).to have_css('.car', count: 4)
  end

  scenario 'pick a car and show more info' do
    visit '/cars'
    save_screenshot('test_3.png')
    # click_link 'More Information'
    click_link('More Information', match: :first)
    # click a link

    save_screenshot('test_3_new_view.png')
    expect(page).to have_text(/More info/i)
  end
end
