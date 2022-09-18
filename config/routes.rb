Rails.application.routes.draw do
  resources :boxes
  
  get '/rooms', to: "boxes#rooms"

end
