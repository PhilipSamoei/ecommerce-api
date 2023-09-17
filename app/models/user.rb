class User < ApplicationRecord
    has_many :items

    validates :name, uniqueness: true
    validates :name, presence: true
    validates :password, length: { in: 8..20 }
    
end
