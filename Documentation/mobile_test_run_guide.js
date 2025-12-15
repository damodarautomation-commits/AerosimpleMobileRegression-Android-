/**
 * ============================================================
 * MOBILE AUTOMATION – COMPLETE RUN GUIDE (FROM SCRATCH)
 * ============================================================
 *
 * Stack:
 * - Android (Real Device: Moto G71 5G)
 * - Appium
 * - WebdriverIO
 * - JavaScript
 *
 * Purpose:
 * This file is a COMPLETE reference to:
 * - What is required
 * - How to start
 * - How to run tests
 * - How to stop tests
 *
 * ============================================================
 */


/* ============================================================
   1. ONE-TIME INSTALLATIONS (SYSTEM LEVEL)
   ============================================================ */

/**
 * Node.js (LTS)
 * Check:
 *   node -v
 *   npm -v
 *
 * Java (JDK 11 or 17)
 * Check:
 *   java -version
 *
 * Android SDK Platform Tools (ADB)
 * Check:
 *   adb version
 *
 * Appium (Global)
 * Install:
 *   npm install -g appium
 *
 * Check:
 *   appium -v
 */


/* ============================================================
   2. PHONE SETUP (MANDATORY – REAL DEVICE)
   ============================================================ */

/**
 * Enable Developer Options:
 * Settings → About phone → Tap Build Number 7 times
 *
 * Turn ON:
 *  - USB debugging
 *  - Install via USB
 *  - Stay awake
 *  - Default USB configuration → File Transfer
 *
 * USB Popup:
 *  - USB controlled by → This device
 *  - Use USB for → File Transfer
 *
 * Allow USB Debugging popup:
 *  - Tap ALLOW
 *  - Check "Always allow"
 */


/* ============================================================
   3. WINDOWS REQUIREMENTS
   ============================================================ */

/**
 * - Install Motorola USB Driver (MANDATORY)
 *   https://motorola-global-portal.custhelp.com/app/answers/detail/a_id/88481
 *
 * - Use DATA USB cable (not charging-only)
 * - Restart PC after driver install
 */


/* ============================================================
   4. VERIFY DEVICE CONNECTION (VERY IMPORTANT)
   ============================================================ */

/**
 * Run:
 *   adb kill-server
 *   adb start-server
 *   adb devices
 *
 * Expected Output:
 *   ZD2225JHNC   device
 *
 * If you see "unauthorized":
 *   Unlock phone → Allow USB debugging
 */


/* ============================================================
   5. PROJECT STRUCTURE (REQUIRED)
   ============================================================ */

/**
 * Project folder must contain:
 *
 * Aerosimple_MobileApp_Regression
 * ├── test/
 * │   └── specs/
 * │       └── login.spec.js
 * ├── pageobjects/
 * ├── wdio.conf.js
 * ├── package.json
 * └── node_modules/
 */


/* ============================================================
   6. INSTALL PROJECT DEPENDENCIES (ONE TIME)
   ============================================================ */

/**
 * Go to project folder:
 *   cd C:\Users\damod\Aerosimple_MobileApp_Regression
 *
 * Install dependencies:
 *   npm install
 */


/* ============================================================
   7. START APPIUM SERVER (MANDATORY)
   ============================================================ */

/**
 * Open NEW terminal and run:
 *   appium
 *
 * Expected:
 *   Appium REST http interface listener started on 0.0.0.0:4723
 *
 * Do NOT close this terminal
 */


/* ============================================================
   8. WDIO CONFIG (REAL DEVICE – MUST HAVE UDID)
   ============================================================ */

/**
 * Example wdio.conf.js capability:
 *
 * capabilities: [{
 *   platformName: 'Android',
 *   'appium:deviceName': 'ZD2225JHNC',
 *   'appium:udid': 'ZD2225JHNC',
 *   'appium:automationName': 'UiAutomator2',
 *   'appium:appPackage': 'com.your.app',
 *   'appium:appActivity': '.MainActivity',
 *   'appium:noReset': true
 * }]
 */


/* ============================================================
   9. RUN TESTS
   ============================================================ */

/**
 * Run ALL tests:
 *   npx wdio run wdio.conf.js
 *
 * Run single test file:
 *   npx wdio run wdio.conf.js --spec test/specs/login.spec.js
 *
 * Run with environment:
 *   ENV=staging npx wdio run wdio.conf.js
 */


/* ============================================================
   10. STOP TESTS
   ============================================================ */

/**
 * Stop running test:
 *   Press CTRL + C in WDIO terminal
 *
 * Stop Appium server:
 *   Press CTRL + C in Appium terminal
 *
 * Force stop Appium (if stuck):
 *   taskkill /F /IM node.exe
 */


/* ============================================================
   11. CLEAN SHUTDOWN (RECOMMENDED)
   ============================================================ */

/**
 * After execution:
 *   adb kill-server
 */


/* ============================================================
   12. COMMON MISTAKES (AVOID)
   ============================================================ */

/**
 * ❌ Appium not started
 * ❌ Device not visible in adb devices
 * ❌ Missing UDID in capabilities
 * ❌ Charging-only USB cable
 * ❌ Running command from wrong folder
 */


/* ============================================================
   13. FINAL SUCCESS CHECK
   ============================================================ */

/**
 * Before every run, this MUST work:
 *
 *   adb devices
 *
 * Output:
 *   ZD2225JHNC   device
 *
 * If yes → you are READY 
 */


/**
 * ============================================================
 * END OF COMPLETE MOBILE AUTOMATION RUN GUIDE
 * ============================================================
 */
