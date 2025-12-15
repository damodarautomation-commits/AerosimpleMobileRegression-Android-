import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginData = require('../testdata/login.json');

export async function aerosimpleLogin() {

    await HomePage.longTapOnLogo();
    await HomePage.selectEnvironment('staging');
    await HomePage.tapDone();
    await HomePage.clickAirportStaffLogin();
    await LoginPage.login(loginData.Login.Email,loginData.Login.Password);
    await LoginPage.waitForHomeToLoad();
}
