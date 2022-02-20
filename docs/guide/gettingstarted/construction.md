# Construction

## Constructing A New Client

If you haven't created your Bot application yet, you can follow this [guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html).

### Ceating Instance

First let's include biscord to your project and create a new instance.

```javascript

  var biscord = require('biscord);
  var Biscord = new biscord({
    token: TOKEN,
    clientid: CLIENTID
  });

```

Visit [configuration](/doc/typedefs/configuration) page to know more about TOKEN and CLIENTID.

### Optional ClientOptions
This configuration is optional because we have already added some, but if you wish to configure your own [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions), you can do so by doing what is shown below.

```javascript
  Biscord.configure( ClientOptions );
```

### Manager and Handlers

Add managers and handlers for you Client, but here we will add commands support to your Client.

First let's define CommandHandler for it to Initialize.

```javascript
  var CommandHandler = new Biscord.CommandHandler( './commands' );
```

Then let's create a folder called `commands`, but you can name it however you want, so we can store our commands, after that let's add a file called `ping.js` to our `commands` folder.

```
root
  ├─── index.js
  └─── commands
    └─── ping.js
```

Then let's add some codes in our `ping.js` file for it to work. You can costumize your own by visiting [CommandSetup](/doc/typedefs/commandsetup) or you can follow what is shown below.

```javascript
module.exports = {

  command: 'Ping',
  description: 'Basic ping command',

  async Execute( message , argument ){

    message.channel.send('Pong!');

  }
}
```

Then we can now start your Client.

### Initializing Biscord
We can now start you client by initializing it.

```javascript
  Biscord.Initialize();
```

A log will be sent when your client is online.

## Testing

To test if the CommandHandler is woring, you can send a message `!ping` to a server channel where your Bot is currently in.

## Output

To wrap up this guide, the `index.js` or your main file should look like this:

```javascript
  var biscord = require('biscord);
  var Biscord = new biscord({
    token: TOKEN,
    clientId: CLIENTID
  });
  var CommandHandler = new Biscord.CommandHandler( './commands' );

  Biscord.Initialize();
```

