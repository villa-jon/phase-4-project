class Api::VotesController < ApplicationController
  # before_action :find_blog
  
  def index
    render json: Vote.all
  end 

  def show
    vote = Vote.find_by_id(params[:id])
    render json: vote
  end 

  def destroy
    # byebug
    @vote = Vote.find_by_id(params[:id])
    @vote.destroy
  end 

  def create
    vote_params[:user_id] = @current_user
    vote = Vote.create(vote_params)
   
    render json: vote
    
  end 

  private 

  def vote_params
    params.permit(:value, :user_id, :blog_id)
  end 

end
