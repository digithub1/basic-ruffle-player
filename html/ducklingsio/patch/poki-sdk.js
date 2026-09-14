// Universal 100% Ad-Free PokiSDK Stub
(function() {
    var noop = function() {};
    var promiseNoop = function() { return Promise.resolve(true); };
    
    var _poki = new Proxy({
        init: function() { return Promise.resolve(true); },
        initWithVideoHB: function() { return Promise.resolve(true); },
        commercialBreak: function() { return Promise.resolve(true); },
        rewardedBreak: function() { return Promise.resolve(true); },
        displayAd: noop,
        destroyAd: noop,
        setDebug: noop,
        gameplayStart: noop,
        gameplayStop: noop,
        happyHour: noop,
        roundStart: noop,
        roundEnd: noop,
        customEvent: noop,
        gameInteractive: noop,
        muteAd: noop,
        setPlayerAge: noop,
        togglePlayerAdvertisingConsent: noop,
        logError: noop,
        sendHighscore: noop,
        setDebugTouchOverlayController: noop,
        gameLoadingStart: noop,
        gameLoadingProgress: noop,
        gameLoadingFinished: noop,
        getLeaderboard: function() { return Promise.resolve([]); },
        getSharableURL: function() { return Promise.resolve(window.location.href); },
        shareableURL: function() { return Promise.resolve(window.location.href); },
        getURLParam: function(param) {
            var match = RegExp("[?&]" + param + "=([^&]*)").exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\+/g, " ")) || "";
        }
    }, {
        get: function(target, prop) {
            if (prop === "then") return undefined;
            if (prop in target) return target[prop];
            return promiseNoop;
        }
    });

    window.PokiSDK = _poki;

    if (typeof window.pokiSDKLoaded === "function") {
        window.pokiSDKLoaded();
    }
})();
