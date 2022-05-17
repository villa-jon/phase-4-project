class Api::VotesController < ApplicationController  
  def index
    render json: Vote.all
  end 

  def show
    vote = Vote.find_by(params[:id])
    render json: vote
  end 

  def destroy
    @vote = current_user.votes.find(params[:id])
    @vote.destroy
  end 

  def create
    params[:user_id] = @current_user.id
    # byebug
    vote = Vote.create!(vote_params)
    render json: vote
  end 

  private 

  def vote_params
    params.permit(:value, :user_id, :blog_id)
  end 

end
