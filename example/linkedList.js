import {LinkedList} from '../src/LinkedList'
const cities = new LinkedList()
cities.insert('Conway')
cities.insert('Russellville', 'Conway')
cities.insert('Carlisle', 'Russellville')
cities.insert('Alma', 'Carlisle')
console.log([...cities])

cities.remove('Carlisle')
cities.toggleReverse()
console.log([...cities])
