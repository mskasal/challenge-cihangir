### Start
```
npm install
npm run develop
```

###Available npm commands

npm test
npm run test:coverage
npm run develop
npm run prod
npm run clean

###Notes about challenge

What did I do?
- Created a component which can show a tree list which
theoretically can contain/handle 'n elements'.
- Wrote tests for utility functions.
- Editor config, task manager, babel etc.

What did I do not?
- Create a proper environment which can handle production and development environments

What did I assume?
- Client gets a limited amount of data (100)

If the client gets an array which has 5 thousand items instead of 100, I could follow a different approach.
For example, If I have these amount of data I could load every child when it clicked.
This way client would not render all components at once.



