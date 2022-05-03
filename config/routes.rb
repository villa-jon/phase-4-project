Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resource :blogs, only: [:index, :show, :update, :destroy] 
  resource :users, only: [:index, :show, :update]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
