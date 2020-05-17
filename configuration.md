---
title: ""
---

# Configuration Overview

The `cfg.toml` file allows for some modifications in the behavour of emulsion. 

Depending on the platform this file can be created at the following location.

- Windows: `%appdata%\emulsion\config\cfg.toml`
- MacOS: `$HOME/Library/Preferences/emulsion/cfg.toml`
- Linux: `$XDG_CONFIG_HOME/emulsion/cfg.toml` or `$HOME/.config/emulsion/cfg.toml`

The contenst of the `cfg.toml` file may for example be the following:

```
[bindings]
img_next = ["k"]
img_prev = ["j"]

[updates]
check_updates = true   # set to false to disable checking for updates
```

All sections in this file are optional, meaning that if for example only `[updates]` is specified then every other section will be using its default values.

The `[updates]` section can contain only one field, namely `check_updates` which may be set to either `true` or `false`.
Emulsion fetches the latest version number and provides a notification only if `check_updates` is set to `true`.
The default value is `true`. (Note that this field has no effect when emulsion is compiled without networking.)

This file may contain a `[bindings]` section which allows defining custom key-bindings.
For more on that please refer to the [bindings](bindings.html) page.

This file may also specify commands that get executed on a given input. For more on those, take a look at the [custom commands](custom-commands.html) page.
