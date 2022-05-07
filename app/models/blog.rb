class Blog < ApplicationRecord
  has_many :votes, as: :reference, dependent: :destroy
  # might have comments but, afaik idk
  # made a likes button instead lol 
  # belongs_to :user
  validates :name, :post, presence: true 
  validates :post, length: {in: (10..500)}
end
