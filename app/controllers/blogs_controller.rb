class BlogsController < ApplicationController
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
    blog = Blog.create(blog_params)
    if blog.save
      render json: blog
    else 
      render json: {
        status: 500,
        errors: blog.errors.full_messages.to_sentence
      }
    end
  end 

  def update 
    blog = Blog.find(params[:id])
    if post&.update(blog_params)
      render json: {message: "Blog is destroyed"}
    else 
      render json: {error: blog.error.full_messages}
    end 
  end 

  def destroy
    blog = Blog.find(params[:id])
    if post&.destroy(blog_params)
      render json: blog 
    else 
      render json: {error: blog.error.full_messages}
    end 
  end 

  private

  def blog_params
    params.require(:blogs).permit(:name, :post)
  end 

end
