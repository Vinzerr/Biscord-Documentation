# DatabaseHandler

## Constructor

```javascript
  new Biscord.DatabaseHandler( path )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| [path](/doc/typedefs/path) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The path to your json file. |

## Methods

### .keys(key)
Get the keys of the key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✓ | Return the keys inside of a key or all the keys in the database. |

Returns: < [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) , [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .set(key , value)
Set the value of a key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to set. |
| value | Any ≠ Function | ⨯ | The value you wish to set. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .push(key , value)
Pushes a value to the value of a key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to push to. |
| value | Any ≠ Function | ⨯ | The value you wish to push. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .add(key , value)
Adds to the value of a key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to subtract from. |
| value | Any ≠ Function | ⨯ | The value you wish to add. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >


### .subtract(key , value)
Subtracts to the value of a key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to subtract from. |
| value | Any ≠ Function | ⨯ | The value you wish to subtract. |

Returns: < [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .get(key)
Get the value of a key in the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to get. |

Returns: < Value , [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >

### .delete(key)
Deletes a key from the database.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :--: | :-----: | :-----: | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ⨯ | The key you wish to get. |

Returns: < Value , [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) >
