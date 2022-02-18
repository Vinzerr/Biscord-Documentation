# SlashHandler

Handle your SlashCommands for all of your Guilds or a Guild.

## Constructor

```javascript
  new CommandHandler.SlashHandler();
```

## Methods

### .register(options)
Register slash commands to all of the servers that the Client is in.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Options | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The options on how will the Client register the commands. |

Returns: none

### .registerGuild(options)
Register slash commands to the provided guild.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Options | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The options on how will the Client register the commands. |

Returns: none
