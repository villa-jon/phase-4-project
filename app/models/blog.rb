class Blog < ApplicationRecord
  has_many :votes, dependent: :destroy
  has_many :comments
  has_many :users, through: :votes
  # might have comments but, afaik idk
  # made a likes button instead lol 
  belongs_to :user
  validates :name, :post, presence: true 
  validates :post, length: {in: (8..500)}

  #alphabetizing by name, creating a button and creating a new route

  def self.alphabetize
    self.order('name ASC')
  end 

  def self.most_votes
    self.preload(:votes).max_by{ |blog| blog.votes.length}
  end 


end
