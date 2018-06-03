# Problem
No real problem

### Task
Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore

### Notes
Length should be between 4 and 16 characters (both included).


# Process
I got the regExp correct but kept getting the same error. It took me a hot minute to realize there was a ' ' in one of usernames and it was returning true.