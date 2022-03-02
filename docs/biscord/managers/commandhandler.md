# Command Handler

## Constructor

```javascript
  new Biscord.CommandHandler( directory , CommandSettings )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The directory to your commands. |
| [CommandOptions](/biscord/typedefs/commandoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the CommandHandler will behave. |


## Properties

### commands
Get Client commands.

Type: [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)

### slashcommands
Get Client application commands, Methods from `Client#application#commands` and `Client#application#commands#cache` methods have been merged.

Type: [ApplicationCommandManager](https://discord.js.org/#/docs/discord.js/stable/class/ApplicationCommandManager) , [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)

## Methods

### register( SlashRegistryOptions )
Registers Slash Commands to all the server that the Client is currenlty in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [SlashRegistryOptions](/biscord/typedefs/slashregistryoptions ) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The options on how Biscord will register the commands. |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [ Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### destroy( )
Destroy this instance.

Returns: None

## Events

### error
Emits when the CommandHandler encounters an error.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| Error | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The error that the handler encountered. |

### cooldown
Emits when a member is on command cooldown.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| Message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that was submitted. |
| Command | [CommandResolvable](/doc/typedefs/commandsetup) | The command that the member attempted to execute. |
| Arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the command. |
| Remaining | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The remaining time before this command can be executed by this member. |

### commandError
Emits when an error was encountered during an execution of a command.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| [CommandCode](/biscord/typedefs/commandcodes) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The cause why the member failed to executed the command for this member. |
| Message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message where this command was attempted to be executed. |
| Arguments | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The arguments of the message. |
| Command | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) / [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | If the command was found it will be a JSON, but if command is non existent it will be the name of the command the member attempted to executed instead.

### slashRegistered
Emits when the SlashCommands are registered to the listed servers that the Bot is currenlty in.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| SlashCommands | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The slash commands that was registered. |
| Guilds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The servers these slash commands was registered to. | 

### slashFailed
Emits when an error was encountered during an execution of a slash command.

| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | :---------- |
| Error | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The error that the handler encountered. |
| Interaction | [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction) | The interaction that was used to execute this slash command. |
