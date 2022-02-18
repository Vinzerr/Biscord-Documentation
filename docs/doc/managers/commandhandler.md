# Command Handler

Handle your commands for your servers.

## Constructor

```javascript
  new Biscord.CommandHandler( Path , CommandSettings );
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [Path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your commands. |
| [CommandSettings](https://biscord.js.org/doc/typedefs/commandsettings.html) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the CommandHandler will behave. |

## Methods

### .get(query)
Gets a command by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name or an alias of the commands. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) , [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) >