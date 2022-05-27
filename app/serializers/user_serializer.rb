class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :votes
  has_many :blogs
  has_many :liked_blogs
end
