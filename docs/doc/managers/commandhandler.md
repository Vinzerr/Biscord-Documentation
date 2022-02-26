# Command Handler

## Constructor

```javascript
  new Biscord.CommandHandler( path, CommandSettings )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The directory to your commands. |
| [CommandSettings](/doc/typedefs/commandsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the CommandHandler will behave. |

## Methods

### .registerSlash(options)
Registers Slash Commands to all the server that the Client is currenlty in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [options](/doc/typedefs/slashoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The options on how Biscord will register the commands. |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [ Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .registerSlashGuild(options)
Registers slash commands to a Guild only that the Client is currenlty in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [options](/doc/typedefs/slashoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The options on how Biscord will register the command. |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [ Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .getSlashCommand(query)
Get a Slash Command by their name or id.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the slash command. |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [ Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >


### .getCommand(query)
Get a Command by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .deleteSlashCommand(query)
Deletes a Slash Command from your Client and collection.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [ Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .deleteCommand(query)
Delete and Disable a Command.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)


### .destroy()
Destroy this instance.

Returns: None

## Events

### error
Emits when the CommandHandler encounters an error.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| error | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The error that the handler encountered. |

### cooldown
Emits when a member is on command cooldown.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that was submitted. |
| command | [CommandResolvable](/doc/typedefs/commandresolvable) | The command that the member attempted to execute. |
| arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the command. |
| remaining | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The remaining time before this command can be executed by this member. |

### invalidCommand
Emits when a member tried to execute an invalid command.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that was submitted. |
| identifier | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command that the memeber tried to execute. |
| arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the message. |

### failedCommand
Emits when the member failed to executes the Command, may be caused by __'BLOCKED_USER'__,  __'INVALID_GUILD'__, and etc.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that was submitted. |
| [CommandCode](/doc/typedefs/commandcodes) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The cause why the member failed to executed the command for this member. |
| identifier | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command that the memeber tried to execute. |
| arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the message. |

### commandExecutionError
Emits when an error was encountered during command execution.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that was used to execute this command. |
| error | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The error that the handler encountered. |
| arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the message. |
| command | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | The command that was attempted to be executed. |

### slashExecutionError
Emits when an error was encountered during slash command execution.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| error | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The error that the handler encountered. |
| [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction) | [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction) | The interaction that was used to execute this slash command. |

### slashRegistered
Emits when the SlashCommands are registered to the listed servers that the Bot is currenlty in.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| slashcommands | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The slash commands that was registered. |
| guilds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The servers these slash commands was registered to. | 

### slashDeleted
Emits when a slash command was deleted.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| command | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | The slash command that was deleted. |

### commandDeleted
Emits when a command was deleted.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| command | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | The command that was deleted. |
