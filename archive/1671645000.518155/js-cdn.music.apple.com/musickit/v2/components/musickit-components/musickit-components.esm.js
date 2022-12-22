/*!
 * IMPORTANT NOTE:
 * 
 *   This file is licensed only for the use of Apple developers in providing MusicKit Web Services,
 *   and is subject to the Apple Media Services Terms and Conditions and the Apple Developer Program
 *   License Agreement. You may not copy, modify, re-host, or create derivative works of this file or the
 *   accompanying Documentation, or any part thereof, including any updates, without Apple's written consent.
 * 
 *   ACKNOWLEDGEMENTS:
 *   https://js-cdn.music.apple.com/musickit/v1/acknowledgements.txt
 */
import{d as e,N as a,w as i,p as t,b as o}from"./p-4c6336e2.js";import{g as l}from"./p-52129c66.js";(()=>{const o=Array.from(e.querySelectorAll("script")).find((e=>new RegExp(`/${a}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===a)),l={};return"onbeforeload"in o&&!history.scrollRestoration?{then(){}}:(l.resourcesUrl=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,i.location.href)).href,t(l))})().then((e=>(l(),o([["p-4b9189c6",[[1,"apple-tv-plus-player",{takeover:[4],mediaItem:[32],isFullscreen:[32],eyebrow:[32],title:[32],onClose:[64],handleClose:[64]},[[0,"exitRequest","handleClose"],[0,"bingeNext","bingeNextHandler"],[0,"playerDidOpen","handlePlayerOpen"]]]]],["p-82e8c695",[[1,"apple-music-video-player",{isolate:[4],takeover:[4],mediaItem:[32],eyebrow:[32],title:[32],closePlayer:[64]},[[0,"exitRequest","closePlayer"],[0,"playerDidOpen","handlePlayerOpen"]]]]],["p-1488e774",[[1,"amp-chrome-player",{realm:[1],contextualMenuConfig:[16],isExpanded:[32],isExpandable:[32]}]]],["p-bf28a672",[[1,"amp-footer-player",{contextualMenuConfig:[16],realm:[1],fullExpansion:[4,"full-expansion"],isExpanded:[32]}]]],["p-8f16ba4e",[[1,"apple-music-card-player",{theme:[1]}]]],["p-a757da76",[[1,"amp-lyrics",{staticLyrics:[4,"static-lyrics"],visible:[4],offsetRatio:[2,"offset-ratio"],currentPlaybackTime:[32],lyrics:[32],loadingState:[32],playbackState:[32],autoScrolling:[32]},[[0,"scrollBehaviorChange","onScrollBehaviorChange"],[0,"lyricClicked","jumpToTime"]]]]],["p-c9cee508",[[1,"amp-user-menu",{isAuthorized:[32]}]]],["p-a0848f9a",[[1,"amp-episode-list-control",{duration:[2],progress:[2],isOpen:[32]}]]],["p-7fa7932c",[[0,"amp-playback-controls-unified"]]],["p-ea73dc25",[[1,"amp-next-episode-control",{isOpen:[32]}]]],["p-e0190c15",[[1,"apple-music-artwork-lockup",{type:[1],contentId:[1,"content-id"],lazyLoad:[4,"lazy-load"]}]]],["p-073f8242",[[1,"apple-music-progress",{theme:[1]}]]],["p-0af07228",[[1,"apple-music-volume",{theme:[1]}]]],["p-6240040c",[[1,"amp-add-to-library",{method:[1],itemId:[1,"item-id"],isAuthorized:[32],hasMusicSubscription:[32]}]]],["p-48c7ef1a",[[1,"amp-jump-to-live-control",{isDisabled:[32]},[[0,"click","jumpToLive"]]]]],["p-2402e4d1",[[1,"amp-playback-controls-autoplay"]]],["p-bb99441b",[[1,"amp-playback-controls-mute",{isMuted:[32]},[[0,"click","toggleMute"]]]]],["p-b5ec040b",[[0,"amp-volume-control-unified"]]],["p-4723f79e",[[1,"apple-music-radio-column-player",{content:[32],timedMetadata:[32]}]]],["p-9ffcfdac",[[0,"amp-ambient-video",{src:[1537],width:[1544],height:[1544],playing:[1540],play:[64],pause:[64]}]]],["p-fd3d9a73",[[1,"amp-artwork",{artworkUrl:[1,"artwork-url"],joeColor:[1,"joe-color"],alt:[1],inline:[4],profileName:[1,"profile-name"],link:[1],mediaIsPlaying:[32]},[[0,"click","handleClick"]]]]],["p-e5f65843",[[1,"amp-background-video",{loop:[516],muted:[1540],width:[520],height:[520],fit:[513],backgroundColor:[32],setBackgroundVideo:[64],destroy:[64],goFullscreen:[64],mute:[64],unmute:[64],play:[64],pause:[64],stop:[64]},[[0,"mediaVolumeChange","handleVolumeChange"]]]]],["p-fea2b49d",[[1,"amp-eq-bars",{active:[4],paused:[4],size:[1],isPageFocused:[32]}]]],["p-7eec24d1",[[1,"amp-footer-player-metadata",{currentItem:[32]}]]],["p-a1d9dac2",[[1,"amp-footer-player-progress",{progress:[32],timeElapsed:[32],timeRemaining:[32]}]]],["p-80673da9",[[1,"amp-loading-spinner"]]],["p-0ef08840",[[1,"amp-lyrics-display-header"]]],["p-f4b9d4d9",[[1,"amp-playback-controls-pip",{isAvailable:[32]},[[0,"click","togglePip"]]]]],["p-40419d00",[[1,"amp-playback-time",{type:[1]}]]],["p-12e74fec",[[0,"amp-podcast-keyboard-controls",{enabled:[4]}]]],["p-77b4df94",[[1,"amp-sign-in"]]],["p-fc01b0d3",[[1,"amp-transition",{in:[4],unmountOnExit:[4,"unmount-on-exit"],enter:[16],exit:[16]}]]],["p-11b33868",[[1,"amp-lyrics-display-time-synced",{showPreviousLyric:[4,"show-previous-lyric"],lyrics:[16],currentPlaybackMillis:[2,"current-playback-millis"],playbackState:[1,"playback-state"],offsetRatio:[2,"offset-ratio"],hostHeight:[32],topOffset:[32],lines:[32]},[[1,"scroll","onLyricsScroll"]]],[1,"amp-lyrics-display-static",{lyrics:[16],songwriters:[32]}]]],["p-b06685ca",[[0,"amp-chrome-volume"]]],["p-8a19d871",[[1,"amp-embed-notification",{icon:[1025],message:[1025],isVisible:[32],showNotification:[64],hideNotification:[64]},[[8,"showNotification","showEventNotification"]]]]],["p-7616223d",[[0,"amp-skip-intro",{isVisible:[32]}],[1,"amp-up-next",{next:[32],isShowing:[32],percentage:[32],displayUpNext:[64]}]]],["p-e030a989",[[1,"apple-music-artwork",{width:[1],height:[1],alt:[1],lazyLoad:[4,"lazy-load"],source:[513],loading:[32],error:[32],timedMetadata:[32]}]]],["p-3c7d02b7",[[1,"amp-more-menu",{isOpen:[32],isItemsHidden:[32],reset:[64]},[[8,"moreMenuItemComplete","onItemComplete"],[8,"keydown","handleKeyDown"]]],[2,"amp-more-menu-item",{action:[16],label:[1],icon:[1]},[[0,"click","onItemClick"]]],[1,"amp-user-avatar",{avatarUrl:[1,"avatar-url"]}]]],["p-1d58dcea",[[1,"amp-popover",{hasTail:[4,"has-tail"],headline:[1]}],[1,"amp-popover-item",{eyebrow:[1],headline:[1],image:[16]}]]],["p-ceb98e04",[[1,"amp-lyrics-display-instrumental-line",{begin:[2],end:[2],lineIndex:[2,"line-index"],isCurrent:[4,"is-current"],currentPlaybackMillis:[2,"current-playback-millis"],playbackState:[1,"playback-state"]}],[1,"amp-lyrics-display-synced-line",{begin:[2],end:[2],lineIndex:[2,"line-index"],lineClasses:[16],isCurrent:[4,"is-current"],isClickDisabled:[4,"is-click-disabled"],collapsible:[4]}],[1,"amp-lyrics-display-footer",{songwriters:[16]}]]],["p-f1742de1",[[1,"amp-volume-control"]]],["p-ca389b3a",[[0,"amp-playback-controls-progress-range",{isDisabled:[32],playbackState:[32],progress:[32],jumpToLiveEdge:[64]}]]],["p-f4f4920c",[[1,"amp-contextual-menu-scrim"],[0,"amp-contextual-menu-item",{item:[16],isSubMenuVisible:[4,"is-sub-menu-visible"],isInSubMenu:[4,"is-in-sub-menu"],parent:[16],transitionText:[32],hideIcon:[32]}]]],["p-0ab03a7a",[[0,"amp-icon",{name:[513],iconContent:[32]}]]],["p-947d89ac",[[0,"amp-playback-controls-skip",{direction:[1],icons:[16]},[[0,"click","triggerNavigation"]]],[4,"amp-playback-controls-play",{hasTopLevelKeyboardControls:[4,"has-top-level-keyboard-controls"],mediaType:[1,"media-type"],isPlaying:[32],activeState:[32],isDisabled:[32]},[[0,"click","togglePlay"],[0,"keydown","favorKeyboardControls"]]]]],["p-32029c56",[[0,"amp-lcd-metadata",{contextualMenuConfig:[16],timedMetadata:[32],linkMetadata:[32]}],[1,"amp-playback-controls-item-skip",{direction:[1],isDisabled:[32]},[[0,"click","toggleNavigation"]]],[1,"amp-playback-controls-repeat",{repeatMode:[32],isDisabled:[32]}],[1,"amp-playback-controls-shuffle",{isShuffled:[32],isDisabled:[32]}],[4,"amp-contextual-menu-button",{config:[16],hasTriggerButton:[4,"has-trigger-button"],isOpen:[32],open:[64],reset:[64]},[[8,"keydown","handleKeyDown"],[8,"contextualMenuClose","reset"]]],[0,"amp-marquee-text",{content:[16],hasValidatedLayoutConstraints:[32],isMarquee:[32]},[[0,"componentResized","onComponentResize"],[1,"mouseover","handleMouseOver"]]],[1,"amp-contextual-menu",{config:[16],activeSubMenuParent:[32],activeElement:[32]},[[8,"contextualMenuItemSubMenuOpen","openMenuItemSubmenu"],[8,"contextualMenuItemMouseLeave","handleContextualMenuItemMouseLeave"],[8,"contextualMenuItemMouseEnter","handleContextualMenuItemMouseEnter"],[8,"contextualMenuItemSubMenuClose","closeMenuItemSubmenu"],[8,"keydown","handleKeyDown"]]]]],["p-2a6a129f",[[1,"amp-lcd",{realm:[1],showEmptyState:[4,"show-empty-state"],contextualMenuConfig:[16],timedMetadata:[32],isExpanded:[32],isBuffering:[32]}],[0,"amp-podcast-playback-controls"],[1,"apple-music-playback-controls",{theme:[1]}],[0,"amp-lcd-progress"]]],["p-8de706bf",[[1,"amp-overlay",{type:[1],isShowing:[32],hideOverlay:[64],showOverlay:[64]}],[1,"amp-playback-controls-progress",{isLoading:[32],timeElapsed:[32],timeRemaining:[32],jumpToLiveEdge:[64]}],[0,"amp-product-placement-overlay-ui",{isShowing:[4,"is-showing"],text:[1]}],[0,"amp-pse-overlay-ui",{isShowing:[4,"is-showing"],imageSrc:[1,"image-src"],imageSrcSet:[1,"image-src-set"],pseTexts:[1,"pse-texts"]}],[0,"amp-rating-overlay-ui",{isShowing:[4,"is-showing"],imageSrc:[1,"image-src"],imageSrcSet:[1,"image-src-set"],advisoryKeys:[16]}]]],["p-c7d920c9",[[1,"amp-video-player-internal",{mediaItem:[16],realm:[1],eyebrow:[1],videoTitle:[1,"video-title"],handlePlayerOpen:[64]}],[4,"amp-window-takeover",{isActive:[4,"is-active"],shouldHideControls:[32],takeoverState:[32]},[[0,"fullscreenChange","onFullscreenChange"],[0,"exitRequest","onExitRequest"],[0,"bingeNext","bingeNextHandler"]]],[0,"amp-tv-overlay",{isRatingShowing:[32],isProductPlacementShowing:[32]}],[1,"amp-airplay-control",{areTargetsAvailable:[32]},[[0,"click","showAirPlayOptions"]]],[1,"amp-audio-tracks-control",{audioTracks:[32]}],[1,"amp-captions-control",{textTracks:[32]}],[1,"amp-playback-controls-exit",{hide:[4]},[[0,"click","handleExit"]]],[1,"amp-playback-controls-full-screen",{fullscreenElement:[16],isFullscreen:[32]},[[8,"toggleFullscreen","toggleFullscreen"],[0,"click","toggleFullscreen"]]],[0,"amp-video-keyboard-controls",{enabled:[4]}],[1,"amp-video-player",{mediaIsInteractive:[32],isInteracting:[32],controlsLocked:[32]},[[0,"videoControlsLock","lockControls"],[0,"videoControlsUnlock","unlockControls"]]]]]],e))));