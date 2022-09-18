class BoxSerializer < ActiveModel::Serializer
  attributes :id, :number, :room, :contents
end
