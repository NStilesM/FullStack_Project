# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Group.destroy_all
QuestionOptions.destroy_all

tester = User.create({id: 0, username: 'tester', email: 'tester@aol.com' , first_name: 'test' ,last_name: 'er', password: 'password'})
group = Group.create({name: "Dummies", user_id: tester.id})
question1 =  Question.create({id: 1,title: 'title', closed: false, allow_unregistered: false, response_limit: 1, author_id: tester.id, group_id: group.id, kind: 'text_response'})
question1 =  Question.create({id: 2,title: 'Why does one eat food?', closed: false, allow_unregistered: false, response_limit: 1, author_id: tester.id, group_id: group.id, kind: 'mult_response'})
question1 =  Question.create({id: 3,title: 'What is the meaning of life?', closed: false, allow_unregistered: false, response_limit: 1, author_id: tester.id, group_id: group.id, kind: 'text_response'})
question1 =  Question.create({id: 4,title: '1 + 1 = ?', closed: false, allow_unregistered: false, response_limit: 1, author_id: tester.id, group_id: group.id, kind: 'mult_response'})
question_options_1 = QuestionOptions.create(label: "To be healthy", question_id: 2)
question_options_1 = QuestionOptions.create(label: "To enjoy it", question_id: 2)
question_options_1 = QuestionOptions.create(label: "3", question_id: 4)
question_options_1 = QuestionOptions.create(label: "2", question_id: 4)
