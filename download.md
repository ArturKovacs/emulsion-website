---
title: ""
---

<script src="jquery-3.3.1.min.js"></script>

# Download

## Windows

The latest Windows installer is <a href="https://github.com/ArturKovacs/emulsion/releases/latest" class="inline-download" id="win-installer">available here.</a>

If you already have a previous version installed, just run the new installer and let it replace the previous files. If you want to install Emulsion to a different location, uninstall the existing instance and then run the installer to install to the new location.

## Mac and Linux

Self-contained packages will be availabe for these platforms soon, but currently the only officially supported method of installing emulsion on these systems is through `cargo`. Note that unoffical packages might be available on your platform. To get `cargo` you have to install the [Rust programming language](https://www.rust-lang.org/tools/install).

Once that's done you might need to sign out and sign back in and then run the following in a terminal window
```
cargo install emulsion
```

Again you might have to log out and log back in, but after this, emulsion will be available from the terminal. To associate an image file type with emulsion you will have to locate it. Executing the following will print the path to emulsion.
```
which emulsion
```

<script>
    $.getJSON("https://api.github.com/repos/ArturKovacs/emulsion/releases/latest").done(function(release) {
        var winAsset = null;
        for (let i = 0; i < release.assets.length; i++) {
            var asset = release.assets[i];
            if (asset.name.endsWith(".exe")) {
                winAsset = asset;
            }
        }
        if (winAsset) {
            var winLink = document.getElementById("win-installer");
            winLink.href = winAsset.browser_download_url;
            winLink.innerText = winAsset.name;
        }
    });
</script>
