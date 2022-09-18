
5.times do |b|
    Box.create(number: b+1, room: "living room", contents: "nothing")
end

5.times do |b|
    Box.create(number: b+1, room: "bedroom", contents: "nothing")
end

5.times do |b|
    Box.create(number: b+1, room: "bathroom", contents: "nothing")
end