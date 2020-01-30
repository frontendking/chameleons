const listSize = Symbol('listSize')
const dataStore = Symbol('dataStore')
const pos = Symbol('pos')

export class List extends Array {
  dataStore(){
    return this[dataStore]
  }
  append(el) {
    this.push(el)
    return this
  }

  remove(el) {
    const foundAt = this[dataStore].indexOf(el)
    if (foundAt> -1) {
      this[dataStore].splice(foundAt, 1)
      --this[listSize]
      return this
    }
    return this
  }

  length() {
    return this[listSize]
  }
}

