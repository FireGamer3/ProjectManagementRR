# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

projects = Project.create([{title: "First Project", completed: false}, {title:"Second Project", completed: true}])

Todo.create(title: "Add Some Comments", project: projects.first)
Todo.create(title: "Debug an issue", project: projects.first)
Todo.create(title: "Do Other Things", project: projects.last)
Todo.create(title: "Finish First Project", project: projects.last)
Todo.create(title: "Do Tech Interview", project: projects.last)