class Api::VotesController < ApplicationController
  def index
    render json: Vote.all
  end 

  def destroy
    @vote = current_user.votes.find(params[:id])
    @vote.destroy
  end 

  def create
    params[:vote][:user_id] = current_user.id
    @vote = Vote.new(vote_params)
    if @vote.save
      flash[:success] = 'Thanks for voting!'
    else 
      flash[:alert] = @vote.errors.full_messages.join(', ')
    end
  end 

  private 
  def vote_params
    params.require(:vote).permit(:value, :user_id, :reference_id, :reference_id)
  end 

end
