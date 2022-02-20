# Biscord

The mind of your client.

## Constructor

```javascript
  new Biscord();
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| token | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | Token of the account to log in into. |
| clientId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The id of your application. |

## Methods

### .intialize()
Logins the Client to the provided account.

Returns: [Client](https://discord.js.org/#/docs/main/stable/class/Client)

## Events

### ready
Emitted when Biscord is ready.