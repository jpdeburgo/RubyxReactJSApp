Rails.application.routes.draw do
  get '/s/:slug/:short_url', to: 'link#show', as: :short
  get '/create/link', to: 'link#create_link', as: :create_link
  post '/create/user', to: 'user#create_user', as: :create_user
  post '/user/login', to: 'user#user_login', as: :user_login

end