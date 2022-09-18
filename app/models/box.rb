class Box < ApplicationRecord

    belongs_to :user

    validates :room, presence: true

end
