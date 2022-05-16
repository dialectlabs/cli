oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @dialectlabs/cli
$ dialect COMMAND
running command...
$ dialect (--version)
@dialectlabs/cli/0.0.0 darwin-arm64 node-v16.14.2
$ dialect --help [COMMAND]
USAGE
  $ dialect COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dialect hello PERSON`](#dialect-hello-person)
* [`dialect hello world`](#dialect-hello-world)
* [`dialect help [COMMAND]`](#dialect-help-command)
* [`dialect plugins`](#dialect-plugins)
* [`dialect plugins:install PLUGIN...`](#dialect-pluginsinstall-plugin)
* [`dialect plugins:inspect PLUGIN...`](#dialect-pluginsinspect-plugin)
* [`dialect plugins:install PLUGIN...`](#dialect-pluginsinstall-plugin-1)
* [`dialect plugins:link PLUGIN`](#dialect-pluginslink-plugin)
* [`dialect plugins:uninstall PLUGIN...`](#dialect-pluginsuninstall-plugin)
* [`dialect plugins:uninstall PLUGIN...`](#dialect-pluginsuninstall-plugin-1)
* [`dialect plugins:uninstall PLUGIN...`](#dialect-pluginsuninstall-plugin-2)
* [`dialect plugins update`](#dialect-plugins-update)

## `dialect hello PERSON`

Say hello

```
USAGE
  $ dialect hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/dialectlabs/cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `dialect hello world`

Say hello world

```
USAGE
  $ dialect hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `dialect help [COMMAND]`

Display help for dialect.

```
USAGE
  $ dialect help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dialect.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `dialect plugins`

List installed plugins.

```
USAGE
  $ dialect plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dialect plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `dialect plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialect plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dialect plugins add

EXAMPLES
  $ dialect plugins:install myplugin 

  $ dialect plugins:install https://github.com/someuser/someplugin

  $ dialect plugins:install someuser/someplugin
```

## `dialect plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dialect plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dialect plugins:inspect myplugin
```

## `dialect plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialect plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dialect plugins add

EXAMPLES
  $ dialect plugins:install myplugin 

  $ dialect plugins:install https://github.com/someuser/someplugin

  $ dialect plugins:install someuser/someplugin
```

## `dialect plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dialect plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ dialect plugins:link myplugin
```

## `dialect plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialect plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialect plugins unlink
  $ dialect plugins remove
```

## `dialect plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialect plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialect plugins unlink
  $ dialect plugins remove
```

## `dialect plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialect plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialect plugins unlink
  $ dialect plugins remove
```

## `dialect plugins update`

Update installed plugins.

```
USAGE
  $ dialect plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
