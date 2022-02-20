# Command Handler

Handle your commands for your servers.

## Constructor

```javascript
  new Biscord.CommandHandler(path, CommandSettings);
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your commands. |
| [CommandSettings](/doc/typedefs/commandsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the CommandHandler will behave. |

## Methods

### .registerSlash(options)
Registers slash commands to all the server that the Client is currenlty in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [options](/doc/typedefs/slashoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The options on how Biscord will register the commands. |

Returns: none

### .registerSlashGuild(options)
Registers slash commands to a Guild only that the Client is currenlty in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [options](/doc/typedefs/slashoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The options on how Biscord will register the command. |

Returns: none

### .getSCommand(query)
Gets a slash command by their name or id.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the slash command. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >


### .get(query)
Gets a command by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .deleteSCommand(query)
Deletes a slash command from your Client and collection.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .delete(query)
Deletes a command from the collection.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the command. |

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)


### .destroy()

Destroy this instance.

Returns: none