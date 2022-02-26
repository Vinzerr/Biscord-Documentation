# Event Handler

Handle your events for your client.

## Constructor

```javascript
  new Biscord.EventHandler( path , EventSettings )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| [path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your events. |
| [EventSettings](/doc/typedefs/eventsettings) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the EventHandler will behave. |

## Methods

### .getEvent(query)
Get an event by their name or an alias.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name of an event. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .deleteEvent(query)
Delete an event from the collection.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| Query | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The name of an event. |

Returns: < [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) , [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) >

### .destroy()

Deletes this instance.

Returns: none