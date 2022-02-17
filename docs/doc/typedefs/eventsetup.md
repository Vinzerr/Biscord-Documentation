# Event Setup

| KEY | TYPE | DESCRIPTION | OPTIONAL | DEFAULT |
| :-: | :--: | ----------- | :------: | :-----: |
| event | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The event. | ⨯ | `none` |
| once | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | If the file will listen to the event once. | ✓ | `false` | 
| Execute | [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | When the event is executed. | ✓ | `none` |


```js

  module.exports = {

    event: 'None' // No default 
    once: false,
  
    async Execute ( params ) {
      /*
      You may put your code here to be executed
      when the event is fired.
      */
    }
  }

```