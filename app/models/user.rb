class User < ApplicationRecord
  has_secure_password  
  has_many :posts
  has_many :votes, dependent: :destroy
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
end
