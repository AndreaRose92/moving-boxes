Rails.application.routes.draw do
  resources :boxes
  
  get '/rooms', to: "boxes#rooms"
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


end
