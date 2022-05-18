class VoteSerializer < ActiveModel::Serializer
  attributes :id, :blog, :user_id, :value
  belongs_to :blog
  # has_one: :post
  def vote_likes
    self.object.votes.length
  end

  def destroy_likes
    self.object.votes.length - 1
  end 

end
