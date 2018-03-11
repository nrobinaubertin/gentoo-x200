/* 
 * user.js
 * Maintainer: Niels Robin-Aubertin @nrobinaubertin niels.fr
 * Good place to start creating your own user.js : https://github.com/ghacksuserjs/ghacks-user.js
 * The section numbers are following those of ghacksuserjs.
 * Personal comments start with "@Niels"
 * My goal are te following:
 *  - add only settings I understand
 *  - add only "invisible" settings that are not easily set without using about:config
 *  - add as few user_pref as possible
 *  - try to use "safe" settings only
 */

/* 
 * @Niels
 * this user_pref is used to know which section contains the faulty parameter
 * since firefox stops scanning user.js when it encounters an error, we can use this user_pref to locate it
 */
user_pref("_user.js.parrot", "START");

/* 0000: disable about:config warning ***/
user_pref("general.warnOnAboutConfig", false);

/*** 0100: STARTUP ***/
user_pref("_user.js.parrot", "0100 syntax error");
user_pref("browser.shell.checkDefaultBrowser", false);

/*** 0200: GEOLOCATION ***/
user_pref("_user.js.parrot", "0200 syntax error");
/* 0201: disable Location-Aware Browsing
 * [1] https://www.mozilla.org/firefox/geolocation/ ***/
user_pref("geo.enabled", false);
/* 0203: disable using OS locale, force APP locale ***/
user_pref("intl.locale.matchOS", false);
/* 0204: set APP locale ***/
user_pref("general.useragent.locale", "en-US");
/* 0205: set OS & APP locale (replaces 0203 + 0204) (FF59+)
 * If set to empty, the OS locales are used. If not set at all, default locale is used ***/
user_pref("intl.locale.requested", "en-US"); // (hidden pref)
/* 0206: disable geographically specific results/search engines e.g. "browser.search.*.US"
 * i.e. ignore all of Mozilla's various search engines in multiple locales ***/
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
/* 0207: set language to match ***/
user_pref("intl.accept_languages", "en-US, en");
/* 0208: enforce US English locale regardless of the system locale
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=867501 ***/
user_pref("javascript.use_us_english_locale", true); // (hidden pref)
/* 0209: use APP locale over OS locale in regional preferences (FF56+)
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1379420 [also 1364789] ***/
user_pref("intl.regional_prefs.use_os_locales", false);
/* 0210: use Mozilla geolocation service instead of Google when geolocation is enabled
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

/*** 0300: QUIET FOX
     We choose to not disable auto-CHECKs (0301's) but to disable auto-INSTALLs (0302's).
     There are many legitimate reasons to turn off auto-INSTALLS, including hijacked or
     monetized extensions, time constraints, legacy issues, and fear of breakage/bugs.
     It is still important to do updates for security reasons, please do so manually. ***/
user_pref("_user.js.parrot", "0300 syntax error");
/* 0301a: disable auto-update checks for Firefox
 * [NOTE] Firefox currently checks every 12 hrs and allows 8 day notification dismissal
 * [SETTING-56+] Options>General>Firefox Updates>Never check for updates
 * [SETTING-ESR] Options>Advanced>Update>Never check for updates ***/
// @Niels I disable this because I'm following updates from my distribution
user_pref("app.update.enabled", false);
/* 0301b: disable auto-update checks for extensions
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) ***/
   // user_pref("extensions.update.enabled", false);
/* 0302a: disable auto update installing for Firefox (after the check in 0301a)
 * [SETTING-56+] Options>General>Firefox Updates>Check for updates but let you choose...
 * [SETTING-ESR] Options>Advanced>Update>Check for updates but let you choose...
 * [NOTE] The UI checkbox also controls the behavior for checking, the pref only controls auto installing ***/
user_pref("app.update.auto", false);
/* 0302b: disable auto update installing for extensions (after the check in 0301b)
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) ***/
user_pref("extensions.update.autoUpdateDefault", false);
/* 0306: disable extension metadata updating
 * sends daily pings to Mozilla about extensions and recent startups ***/
user_pref("extensions.getAddons.cache.enabled", false);
/* 0307: disable auto updating of personas (themes) ***/
user_pref("lightweightThemes.update.enabled", false);
/* 0308: disable search update
 * [SETTING-56+] Options>General>Firefox Update>Automatically update search engines
 * [SETTING-ESR] Options>Advanced>Update>Automatically update: Search Engines ***/
user_pref("browser.search.update", false);
/* 0309: disable sending Flash crash reports ***/
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
/* 0310: disable sending the URL of the website where a plugin crashed ***/
user_pref("dom.ipc.plugins.reportCrashURL", false);
/* 0320: disable about:addons' Get Add-ons panel (uses Google-Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // hidden pref
user_pref("extensions.webservice.discoverURL", "");
/* 0330: disable telemetry
 * the pref (.unified) affects the behaviour of the pref (.enabled)
 * IF unified=false then .enabled controls the telemetry module
 * IF unified=true then .enabled ONLY controls whether to record extended data
 * so make sure to have both set as false
 * [NOTE] FF58+ `toolkit.telemetry.enabled` is now LOCKED to reflect prerelease
 * or release builds (true and false respectively), see [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
/* 0333a: disable health report ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0333b: disable about:healthreport page (which connects to Mozilla for locale/css+js+json)
 * If you have disabled health reports, then this about page is useless - disable it
 * If you want to see what health data is present, then this must be set at default ***/
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
/* 0334: disable new data submission, master kill switch (FF41+)
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0350: disable crash reports ***/
user_pref("breakpad.reportURL", "");
/* 0351: disable sending of crash reports (FF44+) ***/
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // (FF51+)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false); // (FF51-57)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // (FF58+)
/* 0360: disable new tab tile ads & preload & marketing junk ***/
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
/* 0370: disable "Snippets" (Mozilla content shown on about:home screen)
 * [1] https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service ***/
user_pref("browser.aboutHomeSnippets.updateUrl", "data:,");

/*** 0400: BLOCKLISTS / SAFE BROWSING / TRACKING PROTECTION
     This section has security & tracking protection implications vs privacy concerns vs effectiveness
     vs 3rd party 'censorship'. We DO NOT advocate no protection. If you disable Tracking Protection (TP)
     and/or Safe Browsing (SB), then SECTION 0400 REQUIRES YOU HAVE uBLOCK ORIGIN INSTALLED.

     Safe Browsing is designed to protect users from malicious sites. Tracking Protection is designed
     to lessen the impact of third parties on websites to reduce tracking and to speed up your browsing.
     These do rely on 3rd parties (Google for SB and Disconnect for TP), but many steps, which are
     continually being improved, have been taken to preserve privacy. Disable at your own risk.
***/
user_pref("_user.js.parrot", "0400 syntax error");
/** BLOCKLISTS ***/
/* 0401: enable Firefox blocklist, but sanitize blocklist url
 * [NOTE] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 * [2] https://trac.torproject.org/projects/tor/ticket/16931 ***/
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
/* 0402: enable Kinto blocklist updates (FF50+)
 * What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
 * As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
 * revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes ***/
user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
/* 0403: disable individual unwanted/unneeded parts of the Kinto blocklists ***/
   // user_pref("services.blocklist.onecrl.collection", ""); // revoked certificates
   // user_pref("services.blocklist.addons.collection", "");
   // user_pref("services.blocklist.plugins.collection", "");
   // user_pref("services.blocklist.gfx.collection", "");
/** SAFE BROWSING (SB)
    This sub-section has been redesigned to differentiate between "real-time"/"user initiated"
    data being sent to Google from all other settings such as using local blocklists/whitelists and
    updating those lists. There are NO privacy issues here. *IF* required, a full url is never sent
    to Google, only a PART-hash of the prefix, and this is hidden with noise of other real PART-hashes.
    Google also swear it is anonymized and only used to flag malicious sites/activity. Firefox
    also takes measures such as striping out identifying parameters and storing safe browsing
    cookies in a separate jar. (#Turn on browser.safebrowsing.debug to monitor this activity)
    #Required reading [#] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
    [1] https://wiki.mozilla.org/Security/Safe_Browsing ***/
// @Niels I know what I'm doing/browsing. I disable this phoning to Google
/* 0410: disable "Block dangerous and deceptive content" (under Options>Security)
 * This covers deceptive sites such as phishing and social engineering ***/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false); // (FF50+)
/* 0411: disable "Block dangerous downloads" (under Options>Security)
 * This covers malware and PUPs (potentially unwanted programs) ***/
user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0412: disable "Warn me about unwanted and uncommon software" (under Options>Security) (FF48+) ***/
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false); // (FF49+)
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false); // (FF49+)
/* 0413: disable Google safebrowsing updates ***/
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // (FF50+)
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // (FF50+)
/* 0414: disable binaries NOT in local lists being checked by Google (real-time checking) ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
/* 0415: disable reporting URLs ***/
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // (FF50+)
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", ""); // (FF54+)
/* 0416: disable 'ignore this warning' on Safe Browsing warnings which when clicked
 * bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see github wiki APPENDIX C: Test Sites: Section 5
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1226490 ***/
   // user_pref("browser.safebrowsing.allowOverride", false);
/* 0417: disable data sharing (FF58+) ***/
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
/** TRACKING PROTECTION (TP)
    There are NO privacy concerns here, but we strongly recommend to use uBlock Origin as well,
    as it offers more comprehensive and specialized lists. It also allows per domain control. ***/
/* 0420: enable Tracking Protection in all windows
 * [NOTE] TP sends DNT headers regardless of the DNT pref (see 1610)
 * [1] https://wiki.mozilla.org/Security/Tracking_protection
 * [2] https://support.mozilla.org/kb/tracking-protection-firefox ***/
user_pref("privacy.trackingprotection.pbmode.enabled", true); // default true
user_pref("privacy.trackingprotection.enabled", true); // default false
/* 0421: enable more Tracking Protection choices under Options>Privacy>Use Tracking Protection
 * Displays three choices: "Always", "Only in private windows", "Never" ***/
user_pref("privacy.trackingprotection.ui.enabled", true);
/* 0422: enable "basic" or "strict" tracking protecting list - ONLY USE ONE!
 * [SETTING-56+] Options>Privacy & Security>Tracking Protection>Change Block List
 * [SETTING-ESR] Options>Privacy>Use Tracking Protection>Change Block List ***/
   // user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256"); // basic
user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256,content-track-digest256"); // strict
/* 0423: disable Mozilla's blocklist for known Flash tracking/fingerprinting (FF48+)
 * [1] https://www.ghacks.net/2016/07/18/firefox-48-blocklist-against-plugin-fingerprinting/
 * [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1237198 ***/
   // user_pref("browser.safebrowsing.blockedURIs.enabled", false);
/* 0424: disable Mozilla's tracking protection and Flash blocklist updates ***/
   // user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
   // user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
