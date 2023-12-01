# Milestone-2: SUDOKU

## Learning Competencies
At the end of this milestone you will learn
 - Understanding object-oriented Javascript
 - How to make your code DRY (Don't Repeat Yourself)
 - Understanding Asynchronous programming
 - How to Debug effectively
 - Importance of pair programing
 - getting used to external resources like stackoverflow, MDN and other docs

A video on how Sudoku works: [click to watch](https://youtu.be/OtKxtvMUahA)

Originally from Japan, Sudoku games have engaged the masses for quite some time now.  They are mathematically challenging, and make for a great pastime. They are quite challenging and fun to solve, even more so when you have to write a program to do the same. 

## **The Layout**
Sudoku is divided into 9 intermediate boxes, which are further divided into 9 fundamental (smallest) boxes, which contain numbers from 1 to 9.

A part of the puzzle is already there, your objective is to fill out the remaining numbers keeping the following 2 rules in mind:

1. Each row should have the numbers 1 to 9, with none of them being repeated.
2. Each intermediate box should have the numbers 1 to 9, with none repeating.

This puzzle looks deceptively simple, but it blows you away. Solving it without a computer is challenging enough; making an algorithm to do the same provides numerous learning challenges along the way. After you arrive at a solution, your brain will never be the same. 

## **Problem statement**

Input: You are provided with a collection of 9X9 sudoku grids that are partially solved. Your job is to read the sudoku_puzzles.txt file.

Output: Provide the completed puzzle in the sudoku_answers.txt file.

*note: before you write the code to solve your program, go online and find and solve a sudoku pzzle yourself, to get familiar with it*

## **Releases**

the smallest box inside a sudoku puzzle will hereupon be refferred to as a **fundamental** box.

A box made of 9 (3 X 3) fundamental boxes is an **intermediate** box. 

1. Analyse your problem. Think of how to approach it, and how to conceptualize a solution.  
    
    Think how you can represent the whole grid in a data structure. Compare and find out the best method that would be the most intuitive. Don't think of time and space complexity just yet.
    
2. Write a function to input the whole sudoku grid in an array, which uses "-" for blank spaces. 
    1. Write a **pretty board** function that displays the aforementioned sudoku grid into a 2d format, like so:
    
    ```markdown
    1 - 5 8 - 2 - - -
    - 9 - - 7 6 4 - 5
    2 - - 4 - - 8 1 9
    - 1 9 - - 7 3 - 6
    7 6 2 - 8 3 - 9 -
    - - - - 6 1 - 5 -
    - - 7 6 - - - 3 -
    4 3 - - 2 - 5 - 1
    6 - - 3 - 8 9 - -
    ```
    
3. Go Micro. Approach one fundamental line or block, store it in a Data Structure and make and algorithm to solve it.
    1. Does the number inside that box already exist within that same row?
    2. Does it already exist in the intermediate box?
4. Now, Time to think Macro. Extend the previous logic To solve the entire grid. Think of edge cases and exceptions. 
    1. Does the brute force approach extend to the logic for all the rows and columns? 
    2. Do the values of any two or more boxes conflict? How will this be rectified? 
    
    add pictures here
    
5. Now that you have arrived at a solution, try to make your program more efficient. Crack down on your code, revisit parts of it that you can improve. Time to practice good coding habits.
    1. Make comments wherever possible
    2. Try to refactor the code and make it more efficient, less clunky and more readable.
    3. Format your code with prettier in Vscode or a similar formatter. 
6. Time to make it interactive. Create a **command Line Interface** - CLI that takes in sudoku_puzzles.txt and returns the output in a text file.
