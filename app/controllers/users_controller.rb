class Api::UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    users = User.all
    render json: users
  end 
# byebug 
  def show
    user = User.find_by_id(params[:id])
    if user
      render json: user
    else 
      render json: {user.errors.full_messages}
    end
  end 

  def create 
    user = User.new(user_params)
    if user.save
      login!
      render json: user
    else 
      render json: {
        status: 500 
        errors: user.errors.full_messages
      }
    end 
  end 

  # # def update 
  # # end 

  private

  def user_params 
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

  def render_not_found_response
		render json: { error: "User not found" }, status: :not_found
	end

end
