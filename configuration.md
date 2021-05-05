---
title: ""
---

# Configuration Overview

The `cfg.toml` file allows for some modifications in the behaviour of emulsion. 

Depending on the platform, this file can be created at one of the following locations. On Linux, one may run `emulsion -h` to find out the configuration path.

- Windows: `%appdata%\Emulsion\config\cfg.toml`
- MacOS: `$HOME/Library/Application Support/Emulsion/cfg.toml`
- Linux: `$XDG_CONFIG_HOME/emulsion/cfg.toml` or `$HOME/.config/emulsion/cfg.toml`

The contents of the `cfg.toml` file may for example be the following:

```
[bindings]
img_next = ["k"]
img_prev = ["j"]

[updates]
check_updates = true   # set to false to disable checking for updates

[title]
displayed_folders = 1
show_program_name = false

[window]
show_bottom_bar = false
```

All sections in this file are optional, meaning that if for example only `[updates]` is specified then every other section will be using their default values.

## Section `[updates]`

| Field name       | Type            | Default | Description                               |
|------------------|-----------------|---------|-------------------------------------------|
| check_updates    |`true`, `false` | `true`  | Emulsion fetches the latest version number and provides a notification only if this is `true`. (Note that this field has no effect when emulsion is compiled without networking. See more about this at the GitHub page.) |

## Section `[title]`

| Field name                 | Type            | Default   | Description                               |
|----------------------------|-----------------|-----------|-------------------------------------------|
| displayed_folders          |unsigned integer | `0`       | Specifies the number of folders from the path that should be visible in the title. |
| show_program_name          |`true`, `false`| `true`    | If false, the `: EMULSION` text is not displayed in the title. |

## Section `[window]`

| Field name           | Type            | Default | Description                               |
|----------------------|-----------------|---------|-------------------------------------------|
| start_fullscreen     |`true`, `false`| `false` | If `true`, Emulsion enters full-screen mode at startup. |
| start_maximized      |`true`, `false`| `false` | If `true`, Emulsion opens with a maximized window. |
| show_bottom_bar      |`true`, `false`| `true`  | If `false`, the area with buttons at the bottom isn't visible. |
| use_last_window_area |`true`, `false`| `true`  | If `false`, Emulsion uses `win_w`, `win_h`, `win_x`, and `win_y` to determine the window position and size at startup. |
| win_w                | unsigned integer | N/A     | The initial width of the window.          |
| win_h                | unsigned integer | N/A     | The initial height of the window.         |
| win_x                | integer         | N/A     | The initial x coord of the window.        |
| win_y                | integer         | N/A     | The initial y coord of the window.        |

## Other sections

The config may contain a `[bindings]` section which allows defining custom key-bindings.
For more on that please refer to the [bindings](bindings.html) page.

The config may also specify commands that get executed on a given input. For more on those, take a look at the [custom commands](custom-commands.html) page.
