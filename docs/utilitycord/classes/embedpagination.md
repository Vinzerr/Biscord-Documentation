# EmbedPagination

## Constructor
```javascript
  new Utilitycord.EmbedPagination( PaginationOptions )
```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| [PaginationOptions](/utilitycord/typedefs/paginationoptions) | [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | ⨯ | The configuration to configure your EmbedPagination. |

## Methods

### setEmbeds( embeds )
Set the emebds of the pagination.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| embeds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) [ [MessageEmbed](https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed) ] | ⨯ | Sets the embeds to paginate. |

### setTimeout( timeout )
Sets the timeout of the pagination when it is idle.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ⨯ | Disable the buttons after this timeout when the pagination is idle. |

### setButtons( buttons )
Set the interface of the buttons of the pagination/

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| buttons | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) [ [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) ] | ⨯ | What to put in the buttons of the message. |

### setFilter( filter )
Set the filter of the pagination.

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| filter | [CollectorFilter](https://discord.js.org/#/docs/discord.js/stable/typedef/CollectorFilter) | ⨯ | Sets the filter for your Component Collector. |

### send( client , channel )

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION |
| :---: | :-----: | :-----: | ----------- |
| client | [Client](https://discord.js.org/#/docs/discord.js/stable/class/Client) , [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake) | ⨯ | The client where this pagination will base on. |
| channel | [TextChannel](https://discord.js.org/#/docs/discord.js/stable/class/TextChannel) , [DMChannel](https://discord.js.org/#/docs/discord.js/stable/class/DMChannel) , [NewsChannel](https://discord.js.org/#/docs/discord.js/stable/class/NewsChannel) , [ThreadChannel](https://discord.js.org/#/docs/discord.js/stable/class/ThreadChannel) | ⨯ | Where the client will send the pagination to. |
