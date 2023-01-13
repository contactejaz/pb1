/*
  Longest Path of a Binary Tree

Input: Node in a Binary Tree
Output: Integer

Input: <BSTNode 1> =>   Output: 3 (from path 1--> 3--> 4)

     1
  2    3
         4


base:
  node == null
  return 0

depthL=0;
depthR=0;


traverse (node)

  if (noode == null)
    return 0;
  
  
    traverse(node.left)
    depthL++;
  
  
    traverse(node.right)
    depthR++;
  

Return max(depthL, depthR)   
  

  
     1
  2    3
         4


*/

// Divide and Conquer
function longestPath(node){
  // let depthL=0; 
  // let depthR=0;

  traverse(node){ // node 2 , Null
    // base
    if (node == null)  {
      return 0;    
    }

    // Go left, find and return the depth: depthL
    let depthL = traverse(node.left); // 0 
    // Go right, find and return the depth: depthR
    let depthR = traverse(node.right); // 0 
    // We have the depth of left child and right child, what is the depth of current node?
    myDepth = max(depthL, depthR) + 1 // 0 

    return myDepth;
      
    // if (node.left != null) {
    //   depthL++; // 1 2
    // }
    // traverse(node.left); // 2 Null
  
    // if (node.right != null) {
    //   depthR++;
    // }
    // traverse(node.right);
    
  }

  traverse(node);
  
  // return max(depthL, depthR);
}


node = 1, depthL = 0, R = 0
