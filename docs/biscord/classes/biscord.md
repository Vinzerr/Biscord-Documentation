# Biscord

## Constructor

```javascript
  new Biscord( BiscordConfiguration )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [BiscordConfiguration](/biscord/typedefs/biscordconfiguration) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The configuration to configure your Biscord set up. |

## Methods

### configure( ClientOptions )
Configure the ClientOptions for your Client.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [ClientOptions](https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | Default Configuration |

Returns: [Client](https://discord.js.org/#/docs/main/stable/class/Client)

### login( )
Logins the Client to the provided account.

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [Client](https://discord.js.org/#/docs/main/stable/class/Client) >

### destroy( )
Destroy this instance.

Returns: Instance