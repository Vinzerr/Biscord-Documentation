# Event Handler

## Constructor

```javascript
  new Biscord.EventHandler( directory , EventSettings )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The relative directory to your events. |
| [EventOptions](/biscord/typedefs/eventoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ✓ | The settings on how the EventHandler will behave. |

## Properties

### events
The events that your Client is currenlty listening in.

Returns: [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)

## Methods

### destroy( )

Deletes this instance.

Returns: None