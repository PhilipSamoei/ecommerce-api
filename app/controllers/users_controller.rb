class UsersController < ApplicationController
    def index
        user = User.all
        render json: user, status: :ok
    end
    def show
        user = user.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end
    def create
        

    end
end
