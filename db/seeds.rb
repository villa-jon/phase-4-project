# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding......"

user = User.create(username: "JonVilla", password: "Password")
blog = Blog.create(user: user, name: "rails-project", post: "I hate that I am starting all over again but its whatev.")
Vote.create(user: user, blog: blog, value: 1)
puts "all done!"