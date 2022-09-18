class User < ApplicationRecord

    has_many :boxes
    has_secure_password

end
