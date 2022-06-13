class Api::UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize, except: :create

  # def min_blogs
  #   user = User.min_blogs
  #   render json: user
  # end 

  def index
    users = User.all
    render json: users
  end 
# byebug 
  def show
      render json: @current_user
  end 

  def create 
    user = User.create(user_params)
    if user
      # login!
      session[:user_id] = user.id
      render json: user
    else 
      render json: {
        errors: user.errors.full_messages
      }, status: 201 
    end 
  end 

  private

  def user_params 
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

  def render_not_found_response
		render json: { error: "User not found" }, status: :not_found
	end

end
