class User < ApplicationRecord
  has_secure_password  
  has_many :blogs
  has_many :votes, dependent: :destroy
  has_many :liked_blogs, through: :votes, source: :blog 
  has_many :comments
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

  # def self.most_blogs
  #   # self.all.max_by{ |user| user.blogs.length }
  #   # self.preload(:blogs).max_by{ |user| user.blogs.length }
  #   self.joins(:blogs).group("users.id").order("COUNT(blogs.id) DESC").first
  # end 

  # def self.min_blogs
  #     self.all.min_by{ |user| user.blogs.length}
  # end 


end
