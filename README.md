# Lab8_Starter
## Authors
Jiaxin Zhang

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1. Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No, I would not use a unit test to test the "message" feature. Since the feature may has many smaller individual components and we should use unit test for these components instead of a whole big feature.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   Yes, I would use a unit test to test the "max message length" feature. Since its a individual, small component.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   No browser UI will pop up and It will run the tests without browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   Add ``` await page.click('img'); ``` at the end to help us start from the settings page by clicking the settings button.
