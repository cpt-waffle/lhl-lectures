require 'rails_helper'

RSpec.describe Make, type: :model do

  it { should validate_presence_of(:make) }
    # make = Make.new
    # make.save
    # expect(make.errors.messages[:make]).to include "can't be blank"

    # byebug
end
