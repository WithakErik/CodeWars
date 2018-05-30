# Problem
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

### Task
Fix the bug so we can all go home early.

### Notes
String str will never be null.


# Process
This one was pretty easy. I looked at the code, noticed that the '.' didn't have an escape character and that it would just get the first instance of '.'s, so I added a '\' and 'g' to solve the problem. Thanks to having done a handful of other Katas, I'm a little familiar with RegExp.
