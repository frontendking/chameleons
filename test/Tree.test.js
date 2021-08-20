import { BST } from '../src/Tree/Tree'
import { strict as assert } from 'assert'

describe('Tree', () => {
  describe.only('BST', () => {
    describe('read', ()=>{
      it('read the BST', ()=>{
        const bst = new BST()
        assert.equal(bst.read(), null)
      })
    })
    describe('create', () => {
      const bst = new BST()
      it('create the root', () => {
        assert.equal(bst.create(2).value, 2)
      })
      it('create smallerd than root', () => {
        assert.equal(bst.create(1).left.value, 1)
      })
      it('create bigger than root', () => {
        assert.equal(bst.create(4).right.value, 4)
      })
      it('create bst when the root node is full', ()=>{
        assert.equal(bst.create(5).right.right.value, 5)
      })

      // bst.create(5)
      // assert.equal(bst.valueOf()[2][2][0], 5)
    })

    it('update')
    it('delete')

  })
})
