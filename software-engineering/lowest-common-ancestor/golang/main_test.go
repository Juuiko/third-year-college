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
		{root.Left, root.Right, 6},
		{root.Left.Right.Left, root.Left, 2},
		{root.Left.Right.Left, root.Right, 6},
		{root.Right.Right, root.Right.Left, 8},
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
