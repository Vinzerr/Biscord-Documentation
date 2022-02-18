# Construction

## Constructing A New Client

If you haven't created your Bot application yet, you can follow this [guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html).

### Importing biscord

First let's include biscord to your project.

```javascript
  var biscord = require('biscord);
```

### Constructing Biscord

Second let's construct the mind of your client.

```javascript
  var Biscord = new biscord();
```

### Optional ClientOptions
This configuration is optional because we have already added some, but if you wish to configure your own [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions), you can do so by doing what is shown below.

```javascript
  Biscord.configure( ClientOptions );
```

### Manager and Handlers

Add managers and handlers for you Client, but here we will add commands support to your Client.

But first let's create a folder called `commands`, but you can name it however you want, so we can store our commands.

Then let's add a file called `ping.js` to our `commands` folder.

```
root
  ├─── index.js
  └─── commands
    └─── ping.js
```

Then let's add some codes in our `ping.js` file for it to work. You can costumize your own by visiting [CommandSetup](https://biscord.js.org/doc/typedefs/commandsetup.html) or you can follow what is shown below.

```javascript
module.exports = {

  command: 'Ping',
  description: 'Basic ping command',

  async Execute( message , argument ){

    message.channel.send('Pong!');

  }
}
```

Now back to the main file, where you constructed the mind of your Client. Let's add the following.

```javascript
  var CommandHandler = new Biscord.CommandHandler( './commands' , CommandSettings );
```

Remember to change `commands` to what you named your commands folder.

To now more about `CommandSettings` or the second arguments, visit [CommandSettings](https://biscord.js.org/doc/typedefs/commandsettings.html).

Then we can now put your Client online.

### Initializing Biscord

We can now make your Client online by a simple line and adding your Token on it.

```javascript
  Biscord.Initialize( Token );
```

::: tip What is a Token?

  A token is a secret string to use to authenticate to your Client, if you don't know how to obtain or what is a token. Read this [Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html).

:::

And boom, your Client is now online.

## Testing

To test if the CommandHandler is woring, you can send a message `!ping` to a Server channel where your bot is in.

## Output

To wrap up this guide, the `index.js` or your main file should look like this:

```javascript
  var biscord = require('biscord);
  var Biscord = new biscord();
  var CommandHandler = new Biscord.CommandHandler( './commands' );

  Biscord.Initialize( Token );
```

