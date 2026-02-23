# 🚀 JavaScript LeetCode Mastery Roadmap

## 📌 1. Prerequisites (Learn these first!)
Before coding, ensure you understand these JS-specific quirks:
* **Integer Division:** JS uses floats by default. Always use `Math.floor(a / b)`.
* **The "Queue" Problem:** `array.shift()` is O(n). For BFS, use a pointer or a proper Queue class.
* **Map vs Object:** Use `new Map()` for frequent lookups and non-string keys.
* **Big O:** Understand Time vs Space complexity.

---

## 🛠 2. The Problem Roadmap (150+ Problems)

### Phase 1: The Core Patterns (0-40 Problems)
*Goal: Master Hashing and Linear Traversal.*

| Topic | Problem | Logic | Optimal Approach |
| :--- | :--- | :--- | :--- |
| **Arrays** | Two Sum | Find a pair that adds to target | Hash Map for O(n) |
| **Arrays** | Valid Anagram | Check if two strings have same chars | Frequency Map |
| **Two Pointers** | Valid Palindrome | Compare chars from both ends | Left & Right pointers |
| **Two Pointers** | 3Sum | Find triplets that sum to 0 | Sort then 2-pointers |
| **Sliding Window** | Best Time to Buy/Sell Stock | Find max difference | Track min price |
| **Sliding Window** | Longest Substring (No Repeat) | Find longest unique window | Map + Dynamic Window |



---

### Phase 2: Data Structures (40-90 Problems)
*Goal: Master non-linear structures.*

| Topic | Problem | Logic | Optimal Approach |
| :--- | :--- | :--- | :--- |
| **Stack** | Valid Parentheses | Match open/close brackets | LIFO Stack |
| **Binary Search** | Search in Rotated Array | Find element in shifted array | Modified Bin Search |
| **Linked List** | Reverse Linked List | Flip the pointers | Iterative (prev, curr) |
| **Linked List** | Linked List Cycle | Detect a loop | Fast & Slow pointers |
| **Trees** | Invert Binary Tree | Mirror the tree | Recursion (DFS) |
| **Trees** | Level Order Traversal | Visit tree by layers | Queue (BFS) |

---

### Phase 3: Advanced Logic (90-150+ Problems)
*Goal: Solve complex recursive and optimization problems.*

| Topic | Problem | Logic | Optimal Approach |
| :--- | :--- | :--- | :--- |
| **Backtracking** | Subsets | Find all combinations | Recursion (Decision Tree) |
| **Graphs** | Number of Islands | Count connected components | DFS/BFS (Sink islands) |
| **Graphs** | Course Schedule | Find order of tasks | Topological Sort |
| **DP** | Climbing Stairs | Find ways to reach N | Bottom-up Iteration |
| **DP** | Coin Change | Min coins for a sum | 2D Array / Memoization |



---

## 📊 3. Excel/Google Sheets Template
*Copy the text below, save as "tracker.csv", and open in Excel.*

Problem ID,Category,Difficulty,Problem Name,Status,Technique
1,Array,Easy,Two Sum,Not Started,Hash Map
2,Array,Easy,Valid Anagram,Not Started,Frequency Map
3,Two Pointers,Easy,Valid Palindrome,Not Started,2-Pointer
4,Two Pointers,Medium,3Sum,Not Started,Sort + 2-Pointer
5,Sliding Window,Medium,Longest Substring,Not Started,Dynamic Window
6,Stack,Easy,Valid Parentheses,Not Started,Stack
7,Binary Search,Medium,Search in Rotated Array,Not Started,Bin Search
8,Linked List,Easy,Reverse Linked List,Not Started,Iterative
9,Trees,Medium,Level Order Traversal,Not Started,BFS
10,Graphs,Medium,Number of Islands,Not Started,DFS