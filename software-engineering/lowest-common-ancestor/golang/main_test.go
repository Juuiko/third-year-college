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
	// Build graph
	rootDAG := GraphNode{Val: 6}
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 2})
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 1})
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 0})
	rootDAG.c[0].c = append(rootDAG.c[0].c, &GraphNode{Val: 4})
	rootDAG.c[0].c = append(rootDAG.c[0].c, &GraphNode{Val: 3})
	rootDAG.c[1].c = append(rootDAG.c[1].c, &GraphNode{Val: 5})
	//all nodes created, adding branches now
	rootDAG.c[1].c = append(rootDAG.c[1].c, rootDAG.c[0].c[0])
	rootDAG.c[1].c = append(rootDAG.c[1].c, rootDAG.c[1].c[0])
	rootDAG.c[2].c = append(rootDAG.c[2].c, rootDAG.c[1].c[2])

	//make testing table
	table := []struct {
		x *GraphNode
		y *GraphNode
		n int
	}{
		//LCADAG root
		{rootDAG.c[0], rootDAG.c[2], 6},
		//LCADAG nodes next to eachother
		{rootDAG.c[0].c[0], rootDAG.c[0].c[1], 2},
		//LCADAG far nodes
		{rootDAG.c[0].c[0], rootDAG.c[2].c[0], 1},
		//LCADAG repeating nodes
		{&rootDAG, &rootDAG, 6},
	}

	//try each case
	for _, row := range table {
		result := lowestCommonAncestorDAG(&rootDAG, row.x, row.y)
		if result[0] != row.n {
			t.Errorf("LCADAG was incorrect, got: %d, want: %d.", result[0], row.n)
		}
	}
}
