/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    
    //Edge cases for empty lists
    if(!list1) {
        return list2;
    }
    if(!list2) {
        return list1;
    }
  //create return list and temp storage node
  let merged = null;
  let tempNode = null;
  //find start for merge by checking initial list values
  if (list1.val < list2.val) {
    tempNode = merged = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    tempNode = merged = new ListNode(list2.val)
    list2 = list2.next;
  }
  //while loop through both lists, compare values and add to new list
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tempNode.next = new ListNode(list1.val);
      list1 = list1.next;
      tempNode = tempNode.next;
    }else {
      tempNode.next = new ListNode(list2.val);
      list2 = list2.next;
      tempNode = tempNode.next;
    }
  }

  //Add remeaining nodes if one list was longer
  while(list1) {
    tempNode.next = new ListNode(list1.val);
      list1 = list1.next;
      tempNode = tempNode.next;
  }
  while(list2) {
      tempNode.next = new ListNode(list2.val);
      list2 = list2.next;
      tempNode = tempNode.next;
  }
  //return merged list
  return merged;
  
};
const listNode = (val, next) => {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
} 
