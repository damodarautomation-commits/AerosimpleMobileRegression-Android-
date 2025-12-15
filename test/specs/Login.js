import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';
import Search_Module from '../pageobjects/WorkOrders/AWO/create_wo.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loginpage = require('../testdata/login.json');

describe('Environment Switch Test', () => {

    it('Switch environment and login into Aerosimple Mobile App successfully', async () => {
        await HomePage.longTapOnLogo();
        await HomePage.selectEnvironment('staging');
        await HomePage.tapDone();

        await HomePage.clickAirportStaffLogin();
        await LoginPage.login(loginpage.Login.Email,loginpage.Login.Password);
        await LoginPage.waitForHomeToLoad();
        const module = new Search_Module();
        await module.waitForLoaderToDisappear();
        await module.openModule('Work Orders');

    });

});
