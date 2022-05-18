class VoteSerializer < ActiveModel::Serializer
  attributes :id, :blog, :user_id, :value
  belongs_to :blog
  # has_one: :post

end
