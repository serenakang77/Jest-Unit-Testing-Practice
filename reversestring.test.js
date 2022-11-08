const reverseString = require("./reversestring")

test("reverseString function exists", () => {
  // toBeDefined is to check if this is working(function)
  expect(reverseString).toBeDefined()
})

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh")
})

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh")
})
