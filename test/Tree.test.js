import { BST, inOrder } from '../src/Tree/Tree'
import { strict as assert } from 'assert'
import { treeData } from './fixture/tree-data'

describe('Tree', () => {
  describe('traversal', ()=>{
    //The inorder traversal is best written using recursion

    it('inOrder', ()=>{
      assert.deepEqual(inOrder({
        value: 2,
      }), [2])
      assert.deepEqual(inOrder({
        left: {
          value: 1
        },
        value:3
      }), [1,3])
      // assert.deepEqual(inOrder(treeData),[3,16,22,23,37,45,99])

      // assert.deepEqual(inOrder(treeData),[3,11,22,23,37,55,93])
    })
  })
  describe('BST', () => {
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

describe.only('Tree e2e test', ()=>{
  describe('read', ()=>{
    it('read', ()=>{
      const bst = new BST()
      bst.create(23)
      bst.create(45)
      bst.create(16)
      bst.create(37)
      bst.create(3)
      bst.create(99)
      bst.create(22)
      assert.deepEqual(bst.read(inOrder), [3,16,22,23,37,45,99])
    })
  })
})
