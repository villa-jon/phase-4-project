class ApplicationController < ActionController::API
  include ActionController::Cookies
    
  wrap_parameters format: []

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

end
