class Comment < ApplicationRecord
  belongs_to :user 
  belongs_to :blog
  validates :comment, length: {in: (8..150)}
end
