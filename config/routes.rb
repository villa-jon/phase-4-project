Rails.application.routes.draw do
  namespace api: do 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :blogs, only: [:index, :show, :update, :destroy] 
  resources :users, only: [:index, :show, :update]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
