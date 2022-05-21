class BlogSerializer < ActiveModel::Serializer
  attributes :id, :name, :post, :vote_likes, :destroy_likes
  has_many :comments

  def vote_likes
    self.object.votes.length
  end

  def destroy_likes
    self.object.votes
  end 

  # def comment_pleasework
  #   self.object.comments
  # end
  # has_one :user
end
