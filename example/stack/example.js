import { Stack } from '../../src/Stack'

const s = new Stack()

s.push('David', 'Raymond', 'Brayan')
console.log('length: ' + s.length)
console.log(s.peek())
// TODO s.pop -> s.peak,  so pop mehotd need to be refactored
var popped = s.pop()
console.log('The popped element is: ' + popped)
console.log(s.peek())
s.push('Cynthia')
console.log(s.peek())
s.clear()
console.log('length: ' + s.length)
console.log(s.peek())
s.push('Clayton')
console.log(s.peek())
