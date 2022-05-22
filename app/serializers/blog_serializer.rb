class BlogSerializer < ActiveModel::Serializer
  attributes :id, :name, :post, :user_id, :vote_likes, :destroy_likes, :show_users
  has_many :comments
  has_many :votes

  def vote_likes
    self.object.votes.length
  end

  def destroy_likes
    self.object.votes
  end 

  def show_users
    users = []
    @current = self.object.votes
    @current.each do |user|
      users << User.find_by_id(user.user_id).username
    end
    users
    # byebug
  end 

end
