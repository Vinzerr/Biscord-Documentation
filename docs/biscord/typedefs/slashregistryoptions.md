# SlashRegistryOptions

Type: [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

| KEY | TYPE | DESCRIPTION | OPTIONAL | DEFAULT |
| :-: | :--: | ----------- | :------: | :-----: |
| commands | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The commands to only register ( Case Sensitive ). | ✓ | [ 'all' ] |
| clientId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The Client to register the commands to. | ✓ | Instance Client |
| guilds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | The guilds to register these commands to. | ✓ | [ 'all'] |