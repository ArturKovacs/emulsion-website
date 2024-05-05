---
title: ""
---

# Input Bindings

## General

Custom key-bindings can be specified in the `cfg.toml` file. Read about locating or creating the file [here](configuration.html).

This file may contain a `[bindings]` section. If there is no such section, the defaults are used. If we were to add all the default bindings to this file it would look something like the following

```
[bindings]

img_next = ["d", "right", "pagedown"]
img_prev = ["a", "left", "pageup"]
img_orig = ["q", "1"]
img_fit_best = ["e"]
img_fit = ["f"]
img_del = ["delete"]
img_copy = ["cmdctrl+C"]

pan = ["space"]
play_anim = ["alt+a", "alt+v"]
play_present = ["p"]
play_present_rnd = ["alt+p"]
toggle_fullscreen = ["F11", "return"]
toggle_antialias = ["s"]
automatic_antialias = ["alt+s"]
escape = ["Escape"]

# Zoom and pan the camera using keyboard input
# (Not bound by default)
zoom_in = []
zoom_out = []
pan_left = []
pan_right = []
pan_up = []
pan_down = []

# While the button is held down for `pan_vert`,
# the image will only move *vertically* as the 
# mouse is moved.
# `pan_hor` has a similar behaviour, but in the
# *horizontal* direction
pan_vert = [] 
pan_hor = [] 
```

Note that all items in this section are optional so it's fully valid to only specify one of the actions. In this case all the rest will use the default bindings. For example

```
[bindings]
img_next = ["space", "right"]
pan = []
```

The names of the actions _are_ case sensitive but the input strings are _not_.

It is valid to specify an empty array like `img_del = []` in which case the action will never be triggered.

A config file with bindings will look like the following.

```
[bindings]
img_next = ["d", "right"]
img_prev = ["a", "left"]
img_orig = ["q"]
img_fit = ["f"]
img_del = ["delete"]
pan = ["space"]
play_anim = ["alt+a", "alt+v"]
play_present = ["p"]
play_present_rnd = ["alt+p"]
```

## Modifiers

Modifiers may be specified separated by '+' characters. For example `"ctrl+x"` or `"ctrl+alt+u"`. Spaces are trimmed from each element and so
`" ctrl+ x"` or `"ctrl + alt+u  "` are equally valid.

The following modifiers are valid

- `alt`: The Alt key
- `ctrl`: The Control key
- `logo`: The Command key on macOS; the Windows key on Windows
- `cmdctrl`: The Command key on macOS; the Control key elsewhere

## Keys

Everything typeable is supported including unicode characters like `ø`, `ű`, and `💜`.

There are a few special cases for typeable characters:
- `' '` must be specified as `space`
- `'+'` must be specified as `add`.
- `'-'` must be specified as `subtract`.

The following list contains all supported non-typeable keys' names.

```c
Return, // Also know as Enter
Space,
Tab,

// Arrows:
Down,
Left,
Right,
Up,

End,
Home,
PageDown,
PageUp,
Backspace, // Before Emulsion v11.0 this was "Back"
Delete,

Alt,
AltGraph,
Control,
Shift,

Fn,
FnLock,
NumLock,
ScrollLock,
CapsLock,

F1,
F2,
F3,
F4,
F5,
F6,
F7,
F8,
F9,
F10,
F11,
F12,
F13,
F14,
F15,
F16,
F17,
F18,
F19,
F20,
F21,
F22,
F23,
F24,
F25,
F26,
F27,
F28,
F29,
F30,
F31,
F32,
F33,
F34,
F35,

Symbol,
SymbolLock,
Clear,
Copy,
CrSel,
Cut,
EraseEof,
ExSel,
Insert,
Paste,
Redo,
Undo,
Accept,
Again,
Attn,
Cancel,
ContextMenu,
Escape,
Execute,
Find,
Help,
Pause,
Play,
Props,
Select,
ZoomIn,
ZoomOut,
BrightnessDown,
BrightnessUp,
Eject,
LogOff,
Power,
PowerOff,
PrintScreen,
Hibernate,
Standby,
WakeUp,
AllCandidates,
Alphanumeric,
CodeInput,
Compose,
Convert,
FinalMode,
GroupFirst,
GroupLast,
GroupNext,
GroupPrevious,
ModeChange,
NextCandidate,
NonConvert,
PreviousCandidate,
Process,
SingleCandidate,
HangulMode,
HanjaMode,
JunjaMode,
Eisu,
Hankaku,
Hiragana,
HiraganaKatakana,
KanaMode,
KanjiMode,
Katakana,
Romaji,
Zenkaku,
ZenkakuHankaku,
Soft1,
Soft2,
Soft3,
Soft4,
ChannelDown,
ChannelUp,
Close,
MailForward,
MailReply,
MailSend,
MediaClose,
MediaFastForward,
MediaPause,
MediaPlay,
MediaPlayPause,
MediaRecord,
MediaRewind,
MediaStop,
MediaTrackNext,
MediaTrackPrevious,
New,
Open,
Print,
Save,
SpellCheck,
Key11,
Key12,
AudioBalanceLeft,
AudioBalanceRight,
AudioBassBoostDown,
AudioBassBoostToggle,
AudioBassBoostUp,
AudioFaderFront,
AudioFaderRear,
AudioSurroundModeNext,
AudioTrebleDown,
AudioTrebleUp,
AudioVolumeDown,
AudioVolumeUp,
AudioVolumeMute,
MicrophoneToggle,
MicrophoneVolumeDown,
MicrophoneVolumeUp,
MicrophoneVolumeMute,
SpeechCorrectionList,
SpeechInputToggle,
LaunchApplication1,
LaunchApplication2,
LaunchCalendar,
LaunchContacts,
LaunchMail,
LaunchMediaPlayer,
LaunchMusicPlayer,
LaunchPhone,
LaunchScreenSaver,
LaunchSpreadsheet,
LaunchWebBrowser,
LaunchWebCam,
LaunchWordProcessor,
BrowserBack,
BrowserFavorites,
BrowserForward,
BrowserHome,
BrowserRefresh,
BrowserSearch,
BrowserStop,
AppSwitch,
Call,
Camera,
CameraFocus,
EndCall,
GoBack,
GoHome,
HeadsetHook,
LastNumberRedial,
Notification,
MannerMode,
VoiceDial,
TV,
TV3DMode,
TVAntennaCable,
TVAudioDescription,
TVAudioDescriptionMixDown,
TVAudioDescriptionMixUp,
TVContentsMenu,
TVDataService,
TVInput,
TVInputComponent1,
TVInputComponent2,
TVInputComposite1,
TVInputComposite2,
TVInputHDMI1,
TVInputHDMI2,
TVInputHDMI3,
TVInputHDMI4,
TVInputVGA1,
TVMediaContext,
TVNetwork,
TVNumberEntry,
TVPower,
TVRadioService,
TVSatellite,
TVSatelliteBS,
TVSatelliteCS,
TVSatelliteToggle,
TVTerrestrialAnalog,
TVTerrestrialDigital,
TVTimer,
AVRInput,
AVRPower,
ColorF0Red,
ColorF1Green,
ColorF2Yellow,
ColorF3Blue,
ColorF4Grey,
ColorF5Brown,
ClosedCaptionToggle,
Dimmer,
DisplaySwap,
DVR,
Exit,
FavoriteClear0,
FavoriteClear1,
FavoriteClear2,
FavoriteClear3,
FavoriteRecall0,
FavoriteRecall1,
FavoriteRecall2,
FavoriteRecall3,
FavoriteStore0,
FavoriteStore1,
FavoriteStore2,
FavoriteStore3,
Guide,
GuideNextDay,
GuidePreviousDay,
Info,
InstantReplay,
Link,
ListProgram,
LiveContent,
Lock,
MediaApps,
MediaAudioTrack,
MediaLast,
MediaSkipBackward,
MediaSkipForward,
MediaStepBackward,
MediaStepForward,
MediaTopMenu,
NavigateIn,
NavigateNext,
NavigateOut,
NavigatePrevious,
NextFavoriteChannel,
NextUserProfile,
OnDemand,
Pairing,
PinPDown,
PinPMove,
PinPToggle,
PinPUp,
PlaySpeedDown,
PlaySpeedReset,
PlaySpeedUp,
RandomToggle,
RcLowBattery,
RecordSpeedNext,
RfBypass,
ScanChannelsToggle,
ScreenModeNext,
Settings,
SplitScreenToggle,
STBInput,
STBPower,
Subtitle,
Teletext,
VideoModeNext,
Wink,
ZoomToggle
```
