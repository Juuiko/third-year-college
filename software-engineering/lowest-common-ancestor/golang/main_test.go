package main

import "testing"

func TestLCA(t *testing.T) {
	//build tree
	root := TreeNode{Val: 6}
	root.Left = &TreeNode{Val: 2}
	root.Right = &TreeNode{Val: 8}
	root.Left.Left = &TreeNode{Val: 0}
	root.Left.Right = &TreeNode{Val: 4}
	root.Left.Right.Left = &TreeNode{Val: 3}
	root.Left.Right.Right = &TreeNode{Val: 5}
	root.Right.Left = &TreeNode{Val: 7}
	root.Right.Right = &TreeNode{Val: 9}

	//make testing table
	table := []struct {
		x *TreeNode
		y *TreeNode
		n int
	}{
		//LCA root
		{root.Left, root.Right, 6},
		//LCA left node
		{root.Left.Right.Left, root.Left, 2},
		//LCA single node
		{root.Left.Right.Right, root.Left.Right.Right, 5},
		//LCA right node
		{root.Right.Right, root.Right.Left, 8},
		//LCA deepest branches
		{root.Left.Right.Left, root.Left.Right.Right, 4},
	}

	//try each case
	for _, row := range table {
		result := lowestCommonAncestor(&root, row.x, row.y)
		if result.Val != row.n {
			t.Errorf("LCA was incorrect, got: %d, want: %d.", result.Val, row.n)
		}
	}
}

func TestDAG(t *testing.T) {
	//Current implementation cannot handle nodes with more than 2 offspring.
	// TODO more code will have to be added.
}
