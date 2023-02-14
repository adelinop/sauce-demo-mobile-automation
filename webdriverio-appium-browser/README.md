# webdriverio-appium-browser
Browser Test using Webdriverio + Appium + chromedriver

### Suggested IDEs 
- VsCode 
---
<br>

### Installing Dependencies
Navigate to the webdriverio-appium-browser/ directory and run npm install to install the dependencies.

### Configuring Emulator

Inside wdio.config.js
> ```bash
>  	'appium:platformVersion': 'ANDROID_VERSION',
> 	'appium:deviceName': 'EMULATOR_NAME'
> ```

Verify if the chromedriver is same version that the chrome driver present in /app folder

### Configure properly Android Studio
- [Android Studio tutorial](https://developer.android.com/studio/install)
---
<br>

### Running the Tests

-Run the command npm run wdio:run to execute the tests. The tests will run in the emulator and generate an HTML report
