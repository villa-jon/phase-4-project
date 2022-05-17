class VoteSerializer < ActiveModel::Serializer
  attributes :id, :blog, :user_id, :value
  # has_one: :post
end
