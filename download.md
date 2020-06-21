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
        <div class="btn btn-download stretch">Mac</div>
    </a>
</div>
<div class="download-block">
    <a href="https://github.com/ArturKovacs/emulsion/releases/latest" id="deb-installer">
        <div class="logo linux"></div>
        <div class="btn btn-download stretch">.deb</div>
    </a>
</div>
</div>

## Updating on Windows

If you already have a previous version installed, just run the new installer and let it replace the previous files. If you and want to install Emulsion to a different location, uninstall the existing instance and then run the installer to install to the new location.

## Updating on Mac

Open the new dmg and drag the Emulsion app to the Applications folder again, replacing the previous installation.

## Updating on Linux

If you previously had Emulsion installed through `cargo` please remove it first, by running `cargo uninstall emulsion`.

To update one must download the new .deb package from this page and install it over the existing one.

--------

#### Third-party Content

The Linux logo (Tux) was created by Josef Norlin and was released under the [Creative Commons Attribution-ShareAlike 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).



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
            var debLink = document.getElementById("deb-installer");
            if (installers.winUrl) {
                winLink.href = installers.winUrl;
            }
            if (installers.macUrl) {
                macLink.href = installers.macUrl;
            }
            if (installers.debUrl) {
                debLink.href = installers.debUrl;
            }
        }
    );
</script>
