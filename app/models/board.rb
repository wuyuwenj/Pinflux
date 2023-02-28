# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  body       :string           not null
#  private    :boolean          not null
#  owner_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    belongs_to :owner,
        class_name: :User,
        foreign_key: :owner_id

    has_many :pins,
        dependent: :destroy

    
end
