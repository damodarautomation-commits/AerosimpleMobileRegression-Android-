export const config = {
    runner: 'local',

    // Appium server (start manually)
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',

        // Automation
        'appium:automationName': 'UiAutomator2',

        // REAL DEVICE (Moto G71)
        'appium:deviceName': 'ZD2225JHNC',
        'appium:udid': 'ZD2225JHNC',

        // App state
        'appium:noReset': true,

        // Aerosimple Hybrid App
        'appium:appPackage': 'com.aerosimple.hybridapp',
        'appium:appActivity': 'com.aerosimple.hybridapp.MainActivity',

        // ⏱ GENERAL STABILITY
        'appium:newCommandTimeout': 300,
        'appium:autoGrantPermissions': true,

        // UIAUTOMATOR2 CRASH PREVENTION (VERY IMPORTANT)
        'appium:uiautomator2ServerInstallTimeout': 60000,
        'appium:uiautomator2ServerLaunchTimeout': 60000,
        'appium:uiautomator2ServerReadTimeout': 60000,

        // Hybrid safety (won’t hurt native)
        'appium:ensureWebviewsHavePages': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    // ✅ Allure + Spec
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
