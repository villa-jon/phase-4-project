class Vote < ApplicationRecord
  belongs_to :user 
  belongs_to :blog 
  # belongs_to :comment
  validates :user_id, :blog_id, presence: true 
  validates :value, inclusion: 0..4

end
