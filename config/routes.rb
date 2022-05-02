Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resource :post, only: [:index, :show, :update, :destroy] 
  resource :user, only: [:index, :show, :update, :destroy]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
