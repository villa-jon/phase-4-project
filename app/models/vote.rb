class Vote < ApplicationRecord
  belongs_to :user 
  belongs_to :blog 
  # validates :value, :user, :blog
  validates :value, inclusion: 0..4, presence: true 
end
