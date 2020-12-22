#include "main.cpp"
#include "catch_amalgamated.hpp"
#include "catch_amalgamated.cpp"

TEST_CASE() {
    //build tree
    Node * root = addNode(6);
    root->left = addNode(2);
    root->right = addNode(8);
    root->left->left = addNode(0);
    root->left->right = addNode(4);
    root->left->right->left = addNode(3);
    root->left->right->right = addNode(5);
    root->right->left = addNode(7);
    root->right->right = addNode(9);

    //test cases
    //LCA root
    REQUIRE( lowestCommonAncestor(root, root->left, root->right)->val == 6 );
    //LCA left node
    REQUIRE( lowestCommonAncestor(root, root->left->right->left, root->left)->val == 2 );
    //LCA single node
    REQUIRE( lowestCommonAncestor(root, root->left->right->right, root->left->right->right)->val == 5 );
    //LCA right node
    REQUIRE( lowestCommonAncestor(root, root->right->right, root->right->left)->val == 8 );
    //LCA deepest branches
    REQUIRE( lowestCommonAncestor(root, root->left->right->left, root->left->right->right)->val == 4 );
}