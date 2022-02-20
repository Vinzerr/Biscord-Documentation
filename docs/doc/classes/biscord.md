# Biscord

The mind of your client.

## Constructor

```javascript
  new Biscord( configuration );
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [configuration](/doc/typedefs/configuration) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | `none` |

## Methods

### .configure( ClientOptions )
Configure the ClientOptions yourself.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [ClientOptions](https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | `Default Options` |

Returns: none

### .intialize()
Logins the Client to the provided account.

Returns: [Client](https://discord.js.org/#/docs/main/stable/class/Client)

### .destroy()
Destroy this instance.

Returns: none

## Events

### ready
Emitted when Biscord is ready.