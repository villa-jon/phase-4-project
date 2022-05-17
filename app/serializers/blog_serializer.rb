class BlogSerializer < ActiveModel::Serializer
  attributes :id, :name, :post, :vote_likes
  has_many :comments

  def vote_likes
    self.object.votes.length
  end
  # has_one :user
end
