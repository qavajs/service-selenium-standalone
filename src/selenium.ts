import selenium, {ChildProcess} from 'selenium-standalone';

class Selenium {
    options: any;
    private seleniumChildProcess: ChildProcess|null = null;
    async before(): Promise<void> {
        await selenium.install(this.options);
        this.seleniumChildProcess = await selenium.start(this.options);
    }

    async after(): Promise<void> {
        if (this.seleniumChildProcess === null) {
            console.warn('Selenium instance is not launched')
        } else {
            this.seleniumChildProcess.kill();
        }
    }
}

module.exports = new Selenium();
