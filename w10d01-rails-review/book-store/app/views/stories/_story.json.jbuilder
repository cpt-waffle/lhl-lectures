json.extract! story, :id, :title, :content, :created_at, :updated_at
json.url story_url(story, format: :json)
