class UserController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    def create_user
        username = params[:username]
        password = params[:password]
        name = params[:name]
        phone = params[:phone]
        render json: User.create_new_account(username, password, name, phone)
    end

    def user_login
        username = params[:username]
        password = params[:password]
        user = User.user_login(username, password)
        status =  user['status']
        render json: user, status: status
    end
end