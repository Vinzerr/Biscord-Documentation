# CommandResolvable

| KEY | TYPE | DESCRIPTION | OPTIONAL | DEFAULT |
| :-: | :--: | ----------- | :------: | :-----: |
| command | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the commands | ⨯ | none |
| description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The description of the command. | ✓ | "Developer didn't specify the description of the command." | 
| blockedChannels | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The channels where this command cannot be executed. | ✓ | [ ] |
| blockedUsers | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users cannot execute this command. | ✓ | [ ] |
| blockedRoles | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these roles cannot execute this command. | ✓ | [ ] |
| channels | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The channels where this command can only be executed. | ✓ | [ ] |
| users | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who can only execute this command. | ✓ | [ ] |
| roles | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these roles can only execute this command. | ✓ | [ ] |
| permissions | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these permissions can only execute this command. | ✓ | [ ] |
| guilds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The guilds where this command can only be executed.. | ✓ | [ ] |
| data | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/json) | The data for the slash command. | ✓ | { } |
| preExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes before the command is executed. | ✓ | empty | 
| Execute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after preExecute or the main Execution of the command. | ✓ | empty | 
| postExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after the command is executed ( after Execute ). | ✓ | empty | 
| preSlashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes before the slash command is executed. | ✓ | empty | 
| slashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after preExecute or the main Execution of the slash command. | ✓ | empty | 
| postSlashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after the slash command is executed ( after Execute ). | ✓ | empty | 

## Output

```javascript
  
  module.exports = {

    command: 'Command',
    description: 'Description of the command.',
    blockedChannels: [ < Snowflake > ],
    blockedUsers: [ < Snowflake > ],
    blockedRoles: [ < Snowflake > ],
    channels: [ < Snowflake > ],
    users: [ < Snowflake > ],
    roles: [ < Snowflake > ],
    permissions: [ < Permission Bits > ],
    guilds: [ < Snowflake > ],
    data: { < Slash Command JSON > },
  
    async preExecute ( message , arguments ) {
      /*
        You may put your code to be executed
        when before the main Execution is fired.
      */
    },

    async Execute ( message , arguments ) {
      /*
        You may put your code to be executed
        when the command is fired.
      */
    },

    async postExecute ( message , arguments ) {
      /*
        You may put your code to be executed
        after the command is fired.
      */
    },

    async preSlashExecute ( message , arguments ) {
      /*
        You may put your code to be executed
        when before the main Execution is fired.
      */
    },

    async slashExecute ( message , arguments ) {
      /*
        You may put your code to be executed
        when the slash command is fired.
      */
    },

    async postSlashExecute ( message , arguments ) {
      /*
        You may put your code to be executed
        after the slash command is fired.
      */
    }
  
  }
  
```