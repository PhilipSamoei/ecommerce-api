class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :saler, :url
end
