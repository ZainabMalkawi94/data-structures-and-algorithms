const {LinkedList} = require("../lib/LinkedList");
const {zipLists} = require("../lib/LinkedList");


describe("zipLists", () => {
  it("should zip two linked lists correctly", () => {
    // Create the first linked list: list1
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    // Create the second linked list: list2
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    // Call the zipLists function
    let result = zipLists(list1, list2);

    // Assert the zipped list
    let current = result.head;

    // Check the first half of the zipped list
    expect(current.value).toBe(1);
    current = current.next;
    expect(current.value).toBe(5);
    current = current.next;
    expect(current.value).toBe(3);
    current = current.next;
    expect(current.value).toBe(9);

    // Check the second half of the zipped list
    current = current.next;
    expect(current.value).toBe(2);
    current = current.next;
    expect(current.value).toBe(4);
    current = current.next;
    expect(current).toBeNull();
  });

  it("should handle empty lists correctly", () => {
    // Create an empty linked list: list1
    let list1 = new LinkedList();

    // Create a linked list with values: list2
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    // Call the zipLists function
    let result1 = new LinkedList();
    result1 = zipLists(list1, list2);
    let result2 = new LinkedList();
    result2 = zipLists(list2, list1);

    // Assert the zipped lists
    expect(result1.value).toBe(list2.head.value);
    expect(result2.value).toBe(list2.head.value);
  });

  it("should handle lists of different lengths", () => {
    // Create a linked list: list1
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    // Create a shorter linked list: list2
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);

    // Call the zipLists function
    let result1 = zipLists(list1, list2);
    let result2 = zipLists(list2, list1);

    // Assert the zipped lists
    let current = result1.head;
    expect(current.value).toBe(1);
    current = current.next;
    expect(current.value).toBe(5);
    current = current.next;
    expect(current.value).toBe(3);
    current = current.next;
    expect(current.value).toBe(9);
    current = current.next;
    expect(current.value).toBe(2);
    current = current.next;
    expect(current).toBeNull();

    current = result2.head;
    expect(current.value).toBe(5);
    current = current.next;
    expect(current.value).toBe(1);
    current = current.next;
    expect(current.value).toBe(9);
    current = current.next;
    expect(current.value).toBe(3);
    current = current.next;
    expect(current.value).toBe(2);
    current = current.next;
    expect(current).toBeNull();
  });
});
