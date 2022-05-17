class Api::CommentsController < ApplicationController
  def index
    # need an if statement that shows the post the has the comments
    comments = Comment.all
    render json: comments
  end 
#
  def show
    # same with this one 
    comment = Comment.find_by_id(params[:id])
    if comment
      render json: comment
    else 
      render json: {error: "Could not find comment #{params[:id]}"}
    end
  end 
  # byebug 
  def update 
    comment = Comment.find_by_id(params[:id])
    if comment&.update(comment_params)
      render json: comment
    else 
      render json: {error: comment.error.full_messages.to_sentence}, status: 406
    end 
  end 
# byebug
  def create 
    comment = Comment.new(comment_params)
    if comment.save
      # byebug
      render json: comment
    else 
      render json: {
        errors: comment.errors.full_messages.to_sentence
      }, status: 500
    end
  end 

  def destroy
    comment = Comment.find_by_id(params[:id])
    comment.destroy
    if comment&.destroy
      render json: {message: "commment is destroyed"} 
    else 
      render json: {error: comment.errors.full_messages.to_sentence}, status: 406
    end 
  end 

  private

  def comment_params 
    params.permit(:comment, :user_id, :blog_id)
  end 


end
