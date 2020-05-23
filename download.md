---
title: ""
---

<script src="jquery-3.3.1.min.js"></script>

# Download

## Latest

<div class="all-downloads-group">
<div class="download-block">
    <a href="https://github.com/ArturKovacs/emulsion/releases/latest" id="win-installer">
        <div class="logo windows"></div>
        <div class="btn btn-download stretch">Windows</div>
    </a>
</div>
<div class="download-block">
    <a href="https://github.com/ArturKovacs/emulsion/releases/latest" id="mac-installer">
        <div class="logo macos"></div>
        <div href="download.html" class="btn btn-download stretch">Mac</div>
    </a>
</div>
</div>

## Updating on Windows

If you already have a previous version installed, just run the new installer and let it replace the previous files. If you and want to install Emulsion to a different location, uninstall the existing instance and then run the installer to install to the new location.

## Updating on Mac

Open the new dmg and drag the Emulsion app to the Applications folder again, replacing the previous installation.

## For Linux Users

`.deb` packages are planned, but currently the only officially supported method of installing emulsion on Linux systems is through `cargo`. Note that unoffical packages might be available on your platform. To get `cargo` you have to install the [Rust programming language](https://www.rust-lang.org/tools/install).

Once that's done you might need to sign out and sign back in and then run the following in a terminal window
```
cargo install emulsion
```

Again you might have to log out and log back in, but after this, emulsion will be available from the terminal. To associate an image file type with emulsion you will have to locate it. Executing the following will print the path to emulsion.
```
which emulsion
```

<script>
    {% include misc.js %}
    $.getJSON("https://api.github.com/repos/ArturKovacs/emulsion/releases/latest?callback=?")
        .done(function(response) {
            var release = response.data;
            var installers = getInstallerLinks(release);
            var onWindows = navigator.platform.startsWith("Win");
            var onMac = navigator.platform.startsWith("Mac");
            var winLink = document.getElementById("win-installer");
            var macLink = document.getElementById("mac-installer");
            if (installers.winUrl) {
                winLink.href = installers.winUrl;
            }
            if (installers.macUrl) {
                macLink.href = installers.macUrl;
            }
        }
    );
</script>
