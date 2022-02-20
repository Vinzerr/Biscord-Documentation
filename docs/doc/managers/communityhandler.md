# Community Handler

## Constructor

``` javascript
  new Biscord.CommandHandler(guilds, CommunityOptions);
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION | DEFAULT |
| :---: | :-----: | :-----: | ----------- | :-------: |
| [guilds](/doc/typedefs/path) | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | ✓ | The guilds this handler applies to. | `[ 'all' ]` |
| [CommunityOptions](/doc/typedefs/communityoptions) | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | ✓ | The options on how to handle your Communities. | `false` |

## Methods

### .automaticRoles( roles )

Client will add these roles to recently joined members.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| roles | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | ⨯ | The roles to add to recently joined members. |

### .destroy()

Destroy this instance.