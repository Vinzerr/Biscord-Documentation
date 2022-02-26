# Construction

## Constructing A New Client

For your Bot to go online, you need a client. This page will cover on how to Create a client with Biscord framework.

### Ceating Instance

An instance is where we will store our Biscord Client.

```javascript
  var framework = require('biscord');
  var Biscord = new framework({
    token: TOKEN,
    clientid: CLIENTID
  });
```

Visit [configuration](/doc/typedefs/configuration) page to know more about TOKEN and CLIENTID.

### ClientOptions
Here if you wish to add your own [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions), you can do so by adding the code below. But if you do now wish to do so, you can ignore this step.

```javascript
  Biscord.configure( ClientOptions );
```

### Handlers
For our Client to have more features, we can add Handlers and this step will cover how to add TextCommand.

First, let's create an instance for our CommandHandler.

```javascript
  var CommandHandler = new Biscord.CommandHandler( './commands' );
```

Second, create a folder called `commands`, but you can name it however you want, that is where we will store our commands.

Third, create a file inside your commands folder, and name it `ping.js`.

```
root
  ├─── index.js
  └─── commands
    └─── ping.js
```

For the command to work, we need to add some codes to it. You can costumize your own by visiting [CommandSetup](/doc/typedefs/commandsetup) or you can follow what is shown below.

```javascript
module.exports = {

  command: 'Ping',
  description: 'Basic ping command',

  async Execute( message , argument ){

    message.channel.send('Pong!');

  }
}
```

You can now connect your client to Discord, and the commands will load.

### Connecting Client
We can now connect your Client by doing so.

```javascript
  Biscord.connect();
```

A log will be sent to your console when your Client is online, but watch out for errors.

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

  Biscord.connect();
```

