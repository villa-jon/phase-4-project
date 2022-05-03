class UsersController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    @users = User.all
    if @users
      render json: {
        users: @users
      }
    else 
      render json: {
        status: 500 
        errors: ['user not found']
      }
    end
  end 
# byebug 
  def create
    @user = User.find(params[:id])
    if @user
      render json: {
        user: @user
      }
    else 
      render json: {
        status: 500 
        errors: ['user not found']
      }
    end
  end 

  def show 
    @users = User.new(user_params)
    if @users.save
      login!
      render json: {
        status: :created,
        user: @user
      }
    else 
      render json: {
        status: 500 
        errors: @user.errors.full_messages
      }
    end 
  end 

  # def update 
  # end 

  private

  def user_params 
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

  # def render_not_found_response
	# 	render json: { error: "User not found" }, status: :not_found
	# end

end
