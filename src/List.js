const a = 1

export class List extends Array {
  #currIndex = 0
  get currIndex () {
    return this.#currIndex
  }

  front () {
    this.#currIndex = 0
    return this
  }

  end () {
    this.#currIndex = this.length - 1
    return this
  }

  prev () {
    if (this.#currIndex > 0) this.#currIndex--
    return this
  }

  next () {
    if (this.#currIndex < this.length - 1) this.#currIndex++
    return this
  }

  moveTo (idx) {
    this.#currIndex = idx
    return this
  }

  getElement () {
    return this[this.#currIndex]
  }

  append (...el) {
    this.push(...el)
    return this
  }

  remove (el) {
    const elIndex = typeof el === 'function'
      ? this.findIndex(el)
      : this.indexOf(el)
    if (elIndex !== -1) {
      this.splice(elIndex, 1)
      return this
    } else {
      return this
    }
  }

  insert (el, after) {
    const afterIndex = typeof after === 'function' ?
      this.findIndex(after) :
      this.indexOf(after)
    if (afterIndex !== -1) {
      this.splice(afterIndex, 0, el)
      return this
    } else {
      return this
    }
  }

  * [Symbol.iterator] () {
    let memo = this.#currIndex
    while (this.#currIndex < this.length) {
      yield this[this.#currIndex]
      this.#currIndex++
    }
    this.#currIndex = memo

  }
}

