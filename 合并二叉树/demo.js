// 递归。总是关注当前节点
// t1t1 为 null 、t2t2 不是 null，t1t1 换成 t2t2 。（return t2）
// t2t2 为 null、t1t1 不是 null，t1t1 依然 t1t1 。（return t1）
// t1t1 和 t2t2 都为 null，t1t1 依然 t1t1。（return t1）
// t1t1、t2t2 都存在，将 t2t2 的值加给 t1t1 。（t1.val += t2.val）

const mergeTrees = (t1, t2) => {
  if (t1 == null && t2) {
    return t2;
  }
  if ((t1 && t2 == null) || (t1 == null && t2 == null)) {
    return t1;
  }
  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};
