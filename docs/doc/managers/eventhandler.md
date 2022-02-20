# Event Handler

Handle your events for your client.

## Constructor

```javascript
  new Biscord.EventHandler( Path , EventSettings );
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| [Path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your events. |
| [EventSettings](/doc/typedefs/eventsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the EventHandler will behave. |

## Methods

### .get(query)
Gets an event by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name of an event. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .delete(query)
Deletes an event from the collection.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name of an event. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >
