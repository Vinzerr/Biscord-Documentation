# Installation

In order to use Biscord, you need to install [Node.js](https://nodejs.org/) to your project.


## Node.js Installation Guides

### Installing on Windows

It's as straightforward as installing any other tool if you're programming on Windows. Go to the [Node.js website](https://nodejs.org/), download the most recent version, open the downloaded file, and follow the installer's instructions.

### Installing on macOS

You have a few alternatives if you're creating on macOS. You may go to the [Node.js](https://nodejs.org/), download the most recent version, double-click the package installer, and follow the on-screen instructions. You may also run the command using a package management such as Homebrew.

``` bash
  brew install node
```

### Installing on Linux

If you're developing on Linux, you may [Visit this Website](https://nodejs.org/en/download/package-manager/) to figure out how to install Node. On that topic, there's a chance you already have Node installed on your PC (for example, if you're using a VPS). The `node -v` command may be used to determine the installed version. If it returns a value of `v16.6.0` or greater, you're fine to go! Otherwise, [Visit This Page](https://nodejs.org/en/download/package-manager/) for information on installing Node on your operating system.

## Preparing the essentials

To use Biscord, you'll need to install it via NPM ( Node.js Package Manager ). You don't have to bother about installing NPM because it comes with every Node installation. However, you should create a new project folder before installing anything.

Navigate to a suitable location in on your machine and create a new folder with the name you wish to name your project. Next you'll need to launch your terminal.

### Opening the terminal

::: tip
  
  If you program in [Visual Studio Code](https://code.visualstudio.com/), you can press ``Ctrl + \`` (backtick) to open its integrated terminal.

:::

#### Windows

`Shift + Right-click` inside your project directory and choose the "Open command window here" option

Press `Win + R` and run cmd.exe, and then cd into your project directory

#### macOS

Open Launchpad or Spotlight and search for "Terminal"

In your "Applications" folder, under "Utilities", open the Terminal app

#### Linux

You can quickly launch the terminal, by pressing `Ctrl + Alt + T`.

## Initiating a Project

The next command you'll run is this one. 

<code-group>
<code-block title = 'NPM'>
``` bash
  npm init
```
</code-block>

<code-block title = 'YARN'>
``` bash
  yarn init
```
</code-block>

<code-block title = 'PNPM'>
``` bash
  pnpm init
```
</code-block>
</code-group>

This command will generate a package.json file for you, which will store information about your project's dependencies as well as other information.

This command will prompt you with a series of questions, which you should answer as you see fit. Leave it blank and press enter if you're unsure of something or want to skip it entirely.

::: tip

  To get started quickly, run the following command, which will fill in all of the blanks for you.

  <code-group>
  <code-block title = 'NPM'>
    ```bash
      npm init -y 
    ```
  </code-block>

  <code-block title = 'YARN'>
    ```bash
       yarn init -y
    ```
  </code-block>

  <code-block title = 'PNPM'>
    ```bash
      pnpm init -y
    ```
  </code-block>
  </code-group>

:::

Once you're done with that, you're ready to install Biscord!

# Installing Biscord

Now that you've installed Node.js and know how to open your console and run commands, you can finally install discord.js! Run the following command in your terminal:

<code-group>
<code-block title = 'NPM'>
``` bash
  npm install biscord
```
</code-block>

<code-block title = 'YARN'>
``` bash
  yarn add biscord
```
</code-block>

<code-block title = 'PNPM'>
``` bash
  pnpm add biscord
```
</code-block>
</code-group>

And that's it! With all the necessities installed, you're ready to start coding your bot.