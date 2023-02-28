# == Schema Information
#
# Table name: pins
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  body             :string           not null
#  alt_text         :string
#  destination_link :string
#  author_id        :bigint           not null
#  board_id         :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Pin < ApplicationRecord
    belongs_to :board
    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id
end
