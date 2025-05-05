Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Update this with your frontend's URL in production
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  