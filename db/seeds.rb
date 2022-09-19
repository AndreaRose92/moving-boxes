
User.create(username: "Andrea", password: "asdf1234")

rand(5..15).times do |b|
    Box.create(number: b+1, room: "living room", contents: "nothing", user_id: 1)
end

rand(3..10).times do |b|
    Box.create(number: b+1, room: "bedroom", contents: "nothing", user_id: 1)
end

rand(1..4).times do |b|
    Box.create(number: b+1, room: "bathroom", contents: "nothing", user_id: 1)
end