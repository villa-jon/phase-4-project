Rails.application.routes.draw do
  namespace :api do 
    resources :blogs 
    # do 
    #   post "blogs", to: "blogs#create"
    resources :votes
    # end  
    resources :comments
    # resources :votes
    get "/current-user", to: "users#show"
    # get "/most-blogs", to: "users#most_blogs"
    post "/users", to: "users#create" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
