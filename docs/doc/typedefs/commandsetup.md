# CommandSetup

| KEY | TYPE | DESCRIPTION | OPTIONAL | DEFAULT |
| :-: | :--: | ----------- | :------: | :-----: |
| command | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the commands | ⨯ | `none` |
| description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The description of the command. | ✓ | `Developer didn't specify the description of the command.` | 
| blockedUsers | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users cannot execute this command. | ✓ | `[]` |
| blockedRoles | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these roles cannot execute this command. | ✓ | `[]` |
| users | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who can only execute this command. | ✓ | `[]` |
| roles | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these roles can only execute this command. | ✓ | `[]` |
| permissions | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The users who has these permissions can only execute this command. | ✓ | `[]` |
| guilds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The guilds where this command can only be executed.. | ✓ | `[]` |
| preExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes before the command is executed. | ✓ | `none` | 
| Execute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after preExecute or the main Execution of the command. | ✓ | `none` | 
| postExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after the command is executed ( after Execute ). | ✓ | `none` | 
| preSlashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes before the slash command is executed. | ✓ | `none` | 
| slashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after preExecute or the main Execution of the slash command. | ✓ | `none` | 
| postSlashExecute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Executes after the slash command is executed ( after Execute ). | ✓ | `none` | 

## Example

```js
  
  module.exports = {

    command: 'Command',
    description: 'Description of the command.',
    blockedUsers: [ ],
    blockedRoles: [ ],
    users: [ ],
    roles: [ ],
    permissions: [ ],
    guilds: [ ],
  
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