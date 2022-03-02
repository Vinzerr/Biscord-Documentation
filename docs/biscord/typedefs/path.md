# Path

Path to your folders and files, path will start from your root directory.

> **Root Directory**: The directory where your main file ( index.js or start file ) is.

## Examples

```
Root 
  ├─── index.js
  └─── commands
    ├─── help.js
    └─── ban.js             
```

```javascript

  var Handler = new Biscord.<Handler>( '/commands' );

```

```
Root 
  ├─── index.js
  └─── resources
    └─── commands
      ├─── help.js
      └─── ban.js             
```

```javascript

  var Handler = new Biscord.<Handler>( '/resources/commands' );

```

## Handled Categories

```
Root 
  ├─── index.js
  └─── commands
    ├─── information
    │  └─── help.js
    └─── ban.js             
```

Handler that supports Handled Categories ( base folder with another folder inside ) detects folder and files.

The packgae will automatically read the category files and register them.
