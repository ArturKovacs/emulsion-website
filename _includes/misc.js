
// `release` must be the json data returned by
// returned by a github api query to a release
function getInstallerLinks(release) {
    var winAsset = null;
    var macAsset = null;
    var debAsset = null;
    for (let i = 0; i < release.assets.length; i++) {
        var asset = release.assets[i];
        if (asset.name.endsWith(".exe")) {
            winAsset = asset;
        }
        if (asset.name.endsWith(".dmg")) {
            macAsset = asset;
        }
        if (asset.name.endsWith(".deb")) {
            debAsset = asset;
        }
    }
    var winUrl = undefined;
    var winName = undefined;
    var macUrl = undefined;
    var macName = undefined;
    var debUrl = undefined;
    var debName = undefined;
    if (winAsset) {
        winUrl = winAsset.browser_download_url;
        winName = winAsset.name;
    }
    if (macAsset) {
        macUrl =  macAsset.browser_download_url;
        macName = macAsset.name;
    }
    if (debAsset) {
        debUrl =  debAsset.browser_download_url;
        debName = debAsset.name;
    }
    return {
        winUrl: winUrl, winName: winName,
        macUrl: macUrl, macName: macName,
        debUrl: debUrl, debName: debName
    };
}
