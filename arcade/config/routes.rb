Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  post '/auth/login/', to: 'auth#login'
  get '/auth/verify/', to: 'auth#verify'
end
