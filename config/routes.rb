Rails.application.routes.draw do
  resources :users
  resources :boxes
  
  get '/rooms', to: "boxes#rooms"

end
