class LoginPage {
    get emailInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    }
    get nextButton() {
        return $('~Next');
    }
    get passwordInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }
    get loginWithPasswordBtn() {
        return $('android=new UiSelector().text("Login with Password")');
    }

    async waitForLoaderToDisappear() {
        const loader = $('android.widget.ProgressBar');
        if (await loader.isExisting()) {
            await loader.waitForDisplayed({
                reverse: true,
                timeout: 30000
            }).catch(() => {});
        }
    }

    async waitForHomeToLoad() {
        const appsLabel = $('android=new UiSelector().text("Apps")');
        await appsLabel.waitForDisplayed({
            timeout: 30000
        });
        console.log('Home page loaded successfully');
    }

    async login(email, password) {
        await this.emailInput.waitForDisplayed({ timeout: 20000 });
        await this.emailInput.click();
        await this.emailInput.clearValue();
        await this.emailInput.setValue(email);

        await this.nextButton.waitForDisplayed({ timeout: 10000 });
        await this.nextButton.click();

        await this.passwordInput.waitForDisplayed({ timeout: 20000 });
        await this.passwordInput.click();
        await this.passwordInput.clearValue();
        await this.passwordInput.setValue(password);

        try {
            await driver.hideKeyboard();
        } catch (e) {}

        await this.loginWithPasswordBtn.waitForDisplayed({ timeout: 15000 });
        await this.loginWithPasswordBtn.click();

        await this.waitForLoaderToDisappear();
        await this.waitForHomeToLoad();
    }
}

export default new LoginPage();
