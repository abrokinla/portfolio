'''
A program to reverse a stack

'''
# define stack class
class Stack:

    # constructor create     emptty stack
    def __init__(self):
        self.Elements = []

    # def push function
    def push(self, value):
        self.Elements.append(value)

    # def pop function
    def pop(self, value):
        return self.Elements.pop(value)

    # def empty function
    def empty(self):
        return self.Elements == []

    # display stack
    def show(self):
        for value in reversed(self.Elements):
            print(value)

# define function to insert value at bottom of stack
# func InsBottom accepts two paremeters the stack and value to be passed
def InsBottom(stk, value):
    # if stack is empty add value to the bottom of stack
    if stk.empty():
        stk.push(value)
    # if stack is not empty
    else:
        # remove item from top and store in variable popValue
        popValue = stk.pop(value)

        # invoke the function and pass the stack and value as argument
        InsBottom(stk, value)

        #  Append popValue to bottom of stack
        stk.push(popValue)

# Reverse the stack
def Reverse(stk):
    if stk.empty():
        pass
    else:
        popValue = stk.pop(value)
        InsBottom(stk, value)
        stk.push(popValue)


# new stack obkect
myStack = Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)

print('original stack')
myStack.show()

# reversed stack
Reverse(myStack)









