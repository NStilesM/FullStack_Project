# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  kind               :string           not null
#  response_limit     :integer          default(1), not null
#  allow_unregistered :boolean          default(FALSE), not null
#  group_id           :integer          not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  closed             :boolean          default(FALSE)
#
class Question < ApplicationRecord
    validates :title, :kind, presence: true
    validates :kind, inclusion: {in: ['multiple_choice', 'text_response']}


    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :question_options,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :QuestionOptions 

    has_many :responses, 
        through: :question_options


end
