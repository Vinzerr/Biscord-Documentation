# Emitters 

Classes, Handlers, and Managers which has an event category extends an Emitter, which recieves, listens, and emits events.

Emitters have three methods: on , once , and emit.

## Methods

### .on( event , callback )
Listens to the event.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| event | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The event to listen to. |
| callback | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | ⨯ | The function when the event is fired. |

### .once( event , callback )
Listens to the evnt __once__.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| event | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The event to listen to. |
| callback | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | ⨯ | The function when the event is fired. |

### .emit( event , ...arguments )
Emits an event.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| event | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The event to emit. |
| ...arguments | [Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) | ✓ | The arguments to pass to the function callback. |