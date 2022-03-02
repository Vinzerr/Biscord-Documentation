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

## Properties

### events
The events that your Client is currenlty listening in.

Returns: [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)

## Methods

### .destroy()

Deletes this instance.

Returns: None