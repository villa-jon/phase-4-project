class User < ApplicationRecord
  has_secure_password
    has_secure_password
    has_many :posts 
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
end
