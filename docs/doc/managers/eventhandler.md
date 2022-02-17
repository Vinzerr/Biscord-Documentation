# Event Handler

Handle your events for your client.

## Constructor

```javascript

  new Biscord.EventHandler(path);

```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| Path | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your events. |

## Methods

### .get(query)
Gets an evebt by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name of an event. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) , [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) >