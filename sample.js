// Create a map representing a person
tim = {
  name: "Tim",
  age: 30
}
// Implement a set using the map as the key in this map
team = {
  [tim]: true
}

// Or written in long-form
tim = {}
tim["name"] = "Tim"
tim["age"] = 30
team = {}
team[tim] = true

// Or in one expression without temporary variables
{[{name: "Tim", age: 30}]: true}

// Count down from 100 to 1
{|i|
  print(i)
  i > 0 and proto(i - 1)
}(100)

// Abstracted as a countDown function
countDown = { |i, fn|
  fn(i)
  i > 0 and proto(i - 1)
}
countDown(100, print)

// Rectangle Factory
Rect = {|w, h|
  {
    area: { w * h }
  }
}

r = Rect(3, 4)
print(r.area())

// Square Factory
Square = {|s|
  {
    area: { s * s }
  }
}

s = Square(5)
print(s.area())

// Shared Implementation of area (code sharing without inheritance)
area = {|w,h| w * h}
Rect = {|w,h|
  {
    area: {area(w, h)}
  }
}
Square = {|s|
  {
    area: {area(s, s)}
  }
}