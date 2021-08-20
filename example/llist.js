import { LinkedList } from '../src/LinkedList'

const cities = new LinkedList()
cities.insert('Conway')
cities.insert('Russellvile', 'Conway')
cities.insert('Alma', 'Russellvile')
console.log([...cities])
cities.remove('Russellvile')
console.log([...cities])
