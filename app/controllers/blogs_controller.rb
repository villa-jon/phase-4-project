class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
      if @blogs
        render json: {
          blogs: @blogs
        }
      else 
        render json: {
          status: 500 
          errors: ['blog not found']
        }
      end 
  end 

  def create
    @blog = Blog.find(params[:id])
    if @blog
      render json: {
        blog: @blog
      }
    else 
      render json: {
        status: 500 
        errors: ['Blog not found']
      }
    end
  end 

  def show 
    @blog = Blog.new(blogs_params)
    if @blog.save
      render json: {
        status: :created, 
        blog: @blog
      }
    else 
      render json: {
        status: 500,
        errors: @blog.errors.full_messages
      }
    end
  end 

  # def update 
  # end 

  private

  def blogs_params
    params.require(:blogs).permit(:name, :post)
  end 

end
