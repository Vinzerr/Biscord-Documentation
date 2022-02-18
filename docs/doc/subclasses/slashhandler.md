# SlashHandler

Handle your SlashCommands for all of your Guilds or a Guild.

## Constructor

```javascript
  new CommandHandler.SlashHandler();
```

## Methods

### .register( SlashSettings )
Register slash commands to all of the servers that the Client is in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [SlashSettings](/doc/typedefs/slashsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The options on how will the Client register the commands. |

Returns: none

### .registerGuild( SlashSettings )
Register slash commands to the provided guild.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [SlashSettings](/doc/typedefs/slashsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The options on how will the Client register the commands. |

Returns: none
