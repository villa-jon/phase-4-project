class Blog < ApplicationRecord
  has_many :votes, dependent: :destroy
  has_many :comments
  # might have comments but, afaik idk
  # made a likes button instead lol 
  belongs_to :user
  validates :name, :post, presence: true 
  validates :post, length: {in: (8..500)}
end
