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
    post "/users", to: "users#create" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # get "/alphabetize", to: "blogs#alphabetize"
    post "/search_for_comments", to: "blogs#search_for_comments"
    
  end 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
