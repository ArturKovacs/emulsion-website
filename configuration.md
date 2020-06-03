---
title: ""
---

# Configuration Overview

The `cfg.toml` file allows for some modifications in the behaviour of emulsion. 

Depending on the platform, this file can be created at one of the following locations. On Linux, one may run `emulsion -h` to find out the configuration path.

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

[title]
displayed_folders = 1
show_program_name = false
```

All sections in this file are optional, meaning that if for example only `[updates]` is specified then every other section will be using its default values.

The `[updates]` section can contain only one field, namely `check_updates` which may be set to either `true` or `false`.
Emulsion fetches the latest version number and provides a notification only if `check_updates` is set to `true`.
The default value is `true`. (Note that this field has no effect when emulsion is compiled without networking.)

The `[title]` section may contain a `displayed_folders` and a `show_program_name` field. Just as before, either or both of these may be ommited. `displayed_folders` specifies the number of folders from the path that should be visible in the title. When the path contains fewer folders, the entire path is shown. The default for `displayed_folders` is 0. `show_program_name` determines wheter the ": EMULSION" text is appended after the filename. The program name is shown if the this field is `true` and hidden if it's `false`. The default value is `true`.

This file may contain a `[bindings]` section which allows defining custom key-bindings.
For more on that please refer to the [bindings](bindings.html) page.

This file may also specify commands that get executed on a given input. For more on those, take a look at the [custom commands](custom-commands.html) page.
