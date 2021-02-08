class AddLongUrltoUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :longURL, :string
  end
end
