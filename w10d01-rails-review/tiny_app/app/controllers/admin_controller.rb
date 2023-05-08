class AdminController < ApplicationController
  http_basic_authenticate_with name: 'Banana', password: 'banana'
end
