class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment

  def vote_likes
    self.object.votes.length
  end
  
end