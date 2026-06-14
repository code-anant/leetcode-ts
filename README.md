# 📘 LeetCode Solutions

A personal collection of LeetCode problem solutions, organized by topic and difficulty. Focused on patterns commonly tested in MNC technical interviews.

---

## 📊 Progress Tracker

| Difficulty | Solved |
| ---------- | ------ |
| 🟢 Easy    | 1      |
| 🟡 Medium  | 0      |
| 🔴 Hard    | 0      |
| **Total**  | **1**  |

> Update this table as you solve more problems.

---

## 🗂️ Topics Covered

| Topic               | Problems Solved |
| ------------------- | --------------- |
| Arrays & Hashing    | -               |
| Two Pointers        | -               |
| Sliding Window      | -               |
| Stack               | -               |
| Binary Search       | -               |
| Linked List         | -               |
| Trees               | -               |
| Graphs              | -               |
| Dynamic Programming | -               |
| Backtracking        | -               |

---

## 🧩 Solution Format

Every solution file follows this structure:

```js
/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 *
 * Approach:
 * Use a hash map to store complement values as we iterate.
 * Time: O(n) | Space: O(n)
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};
```

---

## 🔑 Key Patterns

| Pattern              | When to Use                                   |
| -------------------- | --------------------------------------------- |
| Sliding Window       | Subarray/substring problems with a constraint |
| Two Pointers         | Sorted arrays, palindrome checks              |
| Fast & Slow Pointers | Cycle detection in linked lists               |
| BFS                  | Shortest path, level-order traversal          |
| DFS                  | Tree/graph traversal, backtracking            |
| Dynamic Programming  | Overlapping subproblems, optimal substructure |
| Binary Search        | Sorted input, search space reduction          |

---

## 🏢 Target Interview Prep

Problems tagged below are commonly asked in MNC interviews (Google, Meta, Amazon, Microsoft):

- [ ] Two Sum
- [ ] Longest Substring Without Repeating Characters
- [ ] Merge Intervals
- [ ] LRU Cache
- [ ] Word Break
- [ ] Number of Islands
- [ ] Coin Change
- [ ] Valid Parentheses
- [ ] Binary Tree Level Order Traversal
- [ ] Top K Frequent Elements

---

## 🛠️ Language Used

All solutions are written in **TypeScript (ES6+)**.

---

## 📌 Resources

- [LeetCode](https://leetcode.com/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
