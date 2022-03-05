class Project < ApplicationRecord
    has_many :todo, dependent: :destroy
end
