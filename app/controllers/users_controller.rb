class UsersController < ApplicationController
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

  def create
  end 

  def show 
  end 

  def update 
  end 

  private

  def user_params 
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

end
