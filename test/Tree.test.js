import { Tree } from '../src/Tree'
import { strict as assert } from 'assert'

describe('Tree', function () {
  const tree = new Tree()
  describe('insert', function () {
    //todo private is private, if you check feature you expose the feature. to do that, user choice that make it private or public, test user just choose to make it public
    it('insert', function () {
      tree.insert(23)
      assert.deepEqual([...tree], [23])
      tree.insert(45)
      tree.insert(-3)
      assert.deepEqual([...tree], [23, 45, -3])
    })
  })
})
