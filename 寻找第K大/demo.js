function findKth( a ,  n ,  K ) {
  // write code here
  a.sort((x,y) => x -y)
  return a.splice((n-K),1)
}