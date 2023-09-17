# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

# Create some fake items
10.times do
  Item.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price(range: 10..1000, as_string: true),
    description: Faker::Lorem.paragraph,
    saler: Faker::Name.name,
    url: Faker::Internet.url
  )
end

puts "Seed data created successfully."