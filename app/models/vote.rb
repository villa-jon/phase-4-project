class Vote < ApplicationRecord
  belongs_to :user 
  belongs_to :reference, polymorphic: true 
  validates_presence_of :value, :user, :reference 
  validates :user_id, uniqueness: { scope: [:reference_id, :reference_type] }
  validates :value, inclusion: 0..4
end
