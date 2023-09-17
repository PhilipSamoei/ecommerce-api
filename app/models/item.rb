class Item < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :price, presence: true
    validates :description, length:{ minimum: 5}
end
