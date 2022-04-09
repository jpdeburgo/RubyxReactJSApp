# app/models/user.rb
require 'active_record'

class User < ActiveRecord::Base
    def self.create_new_account(username, password, name, phone)
        if username && password && name && phone
            if User.where(username: username).length > 0 
                return {'status' => 'failed', 'message' => 'username is taken'}
            end
            if User.where(phone_number: phone).length > 0
                return {'status' => 'failed', 'message' => 'phone is taken'}
            end
            id = User.all.length + 1
            user = User.new(id: id, username: username, password: password, name: name, phone_number: phone)
            user.save
            return {'status' => 'success', 'message' => 'new account created'}
        end
        return {'status' => 'failed', 'message' => 'missing parameter'}
    end

    def self.user_login(username, password)
        if User.where(username: username, password: password)
            user = User.where(username: username, password: password).first
            return {'status' => 200, 'message' => 'user has successfully logged in', 'user'=>user}
        end
        return {'status' => 400, 'message' => 'incorrect username or password'}
    end
end