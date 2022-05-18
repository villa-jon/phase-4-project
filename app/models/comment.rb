class Comment < ApplicationRecord
  belongs_to :user 
  belongs_to :blog
  # has_many :votes,  dependent: :destroy
  validates :comment, length: {in: (8..150)}
end
