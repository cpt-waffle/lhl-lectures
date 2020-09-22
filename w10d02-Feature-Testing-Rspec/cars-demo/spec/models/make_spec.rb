require 'rails_helper'

RSpec.describe Make, type: :model do
  it { should validate_presence_of(:make) }
end
