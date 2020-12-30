package main

import "fmt"

// TreeNode struct for each BST node
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// GraphNode struct for each DAG node
type GraphNode struct {
	Val     int
	Visited bool
	c       []*GraphNode
}

// NodeList is list of all nodes in a DAG
var NodeList []*GraphNode

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if p.Val < root.Val && q.Val < root.Val {
		return lowestCommonAncestor(root.Left, p, q)
	} else if p.Val > root.Val && q.Val > root.Val {
		return lowestCommonAncestor(root.Right, p, q)
	} else {
		return root
	}
}

// function to get a slice containing every node in the graph
func listNodes(node *GraphNode) {
	if !node.Visited {
		node.Visited = true
		NodeList = append(NodeList, node)
		if len(node.c) != 0 {
			for _, v := range node.c {
				listNodes(v)
			}
		} else {
			return
		}
	}
}

// function to check if a given node is in a node slice
func contains(s []*GraphNode, e *GraphNode) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

// brute force algorithm to find LCA in a DAG
func lowestCommonAncestorDAG(root, p, q *GraphNode) []int {
	var lcaList []int
	if p == q {
		lcaList = append(lcaList, p.Val)
		return lcaList
	}
	listNodes(root)
	for i := 0; i < len(NodeList); i++ {
		if contains(NodeList[i].c, p) && contains(NodeList[i].c, q) {
			lcaList = append(lcaList, NodeList[i].Val)
		}
	}
	return lcaList
}

func main() {
	root := TreeNode{Val: 6}
	root.Left = &TreeNode{Val: 2}
	root.Right = &TreeNode{Val: 8}
	root.Left.Left = &TreeNode{Val: 0}
	root.Left.Right = &TreeNode{Val: 4}
	root.Left.Right.Left = &TreeNode{Val: 3}
	root.Left.Right.Right = &TreeNode{Val: 5}
	root.Right.Left = &TreeNode{Val: 7}
	root.Right.Right = &TreeNode{Val: 9}
	output := lowestCommonAncestor(&root, root.Left, root.Right)
	fmt.Println(output.Val)

	rootDAG := GraphNode{Val: 6}
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 2})
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 1})
	rootDAG.c = append(rootDAG.c, &GraphNode{Val: 0})
	rootDAG.c[0].c = append(rootDAG.c[0].c, &GraphNode{Val: 4})
	rootDAG.c[0].c = append(rootDAG.c[0].c, &GraphNode{Val: 3})
	rootDAG.c[1].c = append(rootDAG.c[1].c, &GraphNode{Val: 5})
	//all nodes created, adding branches now
	rootDAG.c[1].c = append(rootDAG.c[1].c, rootDAG.c[0].c[0])
	rootDAG.c[1].c = append(rootDAG.c[1].c, rootDAG.c[0].c[1])
	rootDAG.c[2].c = append(rootDAG.c[2].c, rootDAG.c[1].c[0])
	outputDAG := lowestCommonAncestorDAG(&rootDAG, rootDAG.c[0].c[0], rootDAG.c[2].c[0])
	fmt.Println(outputDAG)
}
