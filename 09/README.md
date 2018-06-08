# Problem
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

### Task
Your task is to write a function that takes a string and return a new string with all vowels removed.

### Notes
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

For this kata y isn't considered a vowel.

# Process
I read the problem, then hypothesized that I could just run a replace(regex, '') on it, so I tried it with '/[aeiou]/g' It failed the first run and that's when I realized that I forgot to 'ignore case' So I ran it again with '/[aeiou]/gi' and it worked!