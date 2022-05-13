var reverseString = function (s) {
  if (s.length === 0) return
  if (s.length === 1) return s

  let left = s.shift()
  let right = s.pop()

  reverseString(s)

  s.unshift(right)
  s.push(left)

  return s
};