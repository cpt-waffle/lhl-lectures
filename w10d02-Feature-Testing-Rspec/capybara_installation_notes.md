cars_spec.rb

RSpec.feature "Cars", type: :feature, js:true do
                                          ^---------------------DO THAT 


## Installing Capybara (group :test do)

```ruby
	gem 'capybara-selenium'
	gem 'webdrivers', '~> 3.0'
	gem 'database_cleaner'
```

https://thoughtbot.com/blog/headless-feature-specs-with-chrome#capybara-configuration
Add to rails helper where it says # Add additional requires below this line. Rails is not loaded until this point!
```ruby
# Add additional requires below this line. Rails is not loaded until this point!
require "selenium/webdriver"
require 'webdrivers'

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.register_driver :headless_chrome do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: { args: %w(headless disable-gpu) }
  )

  Capybara::Selenium::Driver.new app,
    browser: :chrome,
    desired_capabilities: capabilities
end

Capybara.javascript_driver = :headless_chrome
```

In rails_helper line 50-60

look for 

config.use_transactional_fixtures = false
                                     ^----- set it to false

