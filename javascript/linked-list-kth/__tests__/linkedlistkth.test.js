const LinkedList = require("../lib/LinkedList");


describe('LinkedList', () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
  });

  describe('kthFromEnd()', () => {
    test('should return the value of the kth node from the end of the linked list', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(ll.kthFromEnd(0)).toBe(2); // k = 0, last node
      expect(ll.kthFromEnd(2)).toBe(3); // k = 2, second node from the end
    });

    test('should throw an error when k is greater than the length of the linked list', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(() => {
        ll.kthFromEnd(6);
      }).toThrow('k is greater than the length of the linked list');
    });

    test('should throw an error when k is not a positive integer', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(() => {
        ll.kthFromEnd(-1);
      }).toThrow('Invalid value of k');
    });

    test('should throw an error when the linked list has a size of 1 and given k greater than 0', () => {
      ll.append(1);

      expect(ll.kthFromEnd(0)).toBe(1); // k = 3, fourth node from the end
      expect(() => {
        ll.kthFromEnd(2);
      }).toThrow('k is greater than the length of the linked list');
    });
   

    test('should return the value of the kth node from the end for a non-empty linked list', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);
      ll.append(5);
      ll.append(4);

      expect(ll.kthFromEnd(3)).toBe(8); // k = 3, fourth node from the end
      expect(ll.kthFromEnd(5)).toBe(1); // k = 5, first node from the end
    });
  });

  describe('findMiddleNode()', () => {
    test('should return the value of the middle node of the linked list', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);
      ll.append(7);

      expect(ll.findMiddleNode()).toBe(8);
    });

    test('should throw an error when the linked list is empty', () => {
      expect(() => {
        ll.findMiddleNode();
      }).toThrow('Empty linked list');
    });

    test('should return the value of the middle node when the linked list has odd length', () => {
      ll.append(1);
      ll.append(3);
      ll.append(8);

      expect(ll.findMiddleNode()).toBe(3);
    });

    test('should return the value of the middle node when the linked list has even length', () => {
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.append(5);
      ll.append(6);
      expect(ll.findMiddleNode()).toBe(4);
    });
  });
});
