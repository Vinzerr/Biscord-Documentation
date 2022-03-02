# PaginationOptions

Type: [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

| PARAMETER | TYPE | DESCRIPTION |
| :---: | :-----: | :----------- |
| embeds | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) [ [MessageEmbed](https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed) ] | The embeds the pagination will paginate. |
| timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Disable the buttons after this timeout when the pagination is idle. |
| buttons | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) [ [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) ] | What to put in the buttons of the message. |
| filter | [CollectorFilter](https://discord.js.org/#/docs/discord.js/stable/typedef/CollectorFilter) | Sets the filter for your Component Collector. |