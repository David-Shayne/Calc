Calc - The calculator app

- This is a calculator app that is generated using simple vanilla Javascript DOM manipulation

# App Functionality

- Perform operations on an nth list of numbers
- Return the total when pressing enter
- Operators: Add, Subtract, Multiply, Divide

# Design Pseudocode

Have a total variable that saves the current total
Each operation updates the total by: total (op) current number
When each operation is made, the total is updated
Total is displayed on pressing equals

~ Updating total with operation
When a new operation is pressed, run the previous operation:
Parse the text (selected down till last operator) and find the value and operation
Perform the operation on total and value then save to new total
