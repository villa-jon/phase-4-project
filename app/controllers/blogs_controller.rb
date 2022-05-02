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
  end 

  def show 
  end 

  def update 
  end 

  private

  def blogs_params
    params.require(:blogs).permit(:name, :post, :date)
  end 

end
