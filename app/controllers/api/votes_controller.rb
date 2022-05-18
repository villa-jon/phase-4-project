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
    @vote = current_user.votes.find(params[:id])
    @vote.destroy
  end 

  def create
    params[:user_id] = @current_user.id
    vote = Vote.create(vote_params)
    # byebug
    render json: vote
  end 

  private 

  # def find_blog
  #   @blog = Blog.find(params[:blog_id])
  # end

  def vote_params
    params.permit(:value, :user_id, :blog_id)
  end 

end
