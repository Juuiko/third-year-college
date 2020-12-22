#include <iostream>
#include <vector>
 
using namespace std;
 
struct Node {
    int val;
    struct Node *left;
    struct Node *right;
};
 
Node * addNode(int i){
    Node *node = new Node;
    node->val = i;
    node->left  = NULL;
    node->right = NULL;
    return node;
}
 
    bool findInSubtree(Node* root, Node* val) {
        if(!root) return false;
        if (root == val) return true;
        return findInSubtree(root->left, val) || findInSubtree(root->right, val);
    }
    
    Node* lowestCommonAncestor(Node* root, Node* p, Node* q) {
        while (root){
            if(findInSubtree(root->left, p) && findInSubtree(root->left, q)) root = root->left;
            else if(findInSubtree(root->right, p) && findInSubtree(root->right, q)) root = root->right;
            else break;
        }
        return root;
    }
 
int main(){
    Node * root = addNode(6);
    root->left = addNode(2);
    root->right = addNode(8);
    root->left->left = addNode(0);
    root->left->right = addNode(4);
    root->left->right->left = addNode(3);
    root->left->right->right = addNode(5);
    root->right->left = addNode(7);
    root->right->right = addNode(9);

    cout << lowestCommonAncestor(root, root->left, root->right)->val;
    return 0;
}