class Blog < ApplicationRecord
  # has_many: comments
  # might have comments but, afaik idk
  belongs_to: user
end
