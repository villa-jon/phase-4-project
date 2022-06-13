class Api::BlogsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    blogs = Blog.all
    render json: blogs
  end 

  def show
    blog = Blog.find_by_id(params[:id])
    if blog 
      render json: blog
    else 
      render json: {error: "Could not find blog #{params[:id]}"}
    end
  end 

  def create 
    blog = Blog.new(blog_params)
    if blog.save
      # byebug
      render json: blog
    else 
      render json: {
        errors: blog.errors.full_messages.to_sentence
      }, status: 500
    end
  end 

  def update 
    blog = Blog.find_by(id: params[:id])
    if blog&.update(blog_params)
      render json: blog
    else 
      render json: {errors: blog.errors.full_messages.to_sentence}, status: 406
    end 
  end 

  def destroy
    blog = Blog.find(params[:id])
    blog.destroy
    if blog&.destroy
      render json: {message: "Blog is destroyed"} 
    else 
      render json: {error: blog.error.full_messages.to_sentence}, status: 406
    end 
  end 

  # byebug

  def most_votes
    blog = Blog.most_votes
    render json: blog
  end 

  private

  def blog_params
    params.permit(:name, :post, :user_id)
  end 

  def render_not_found_response
		render json: { error: "Blog not found" }, status: :not_found
	end

end
