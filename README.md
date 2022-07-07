# Twilio Token Service
This is a service to generate a [Twilio Access Token](https://www.twilio.com/docs/iam/access-tokens), using [Twilio Functions](https://www.twilio.com/docs/runtime/functions). The token provides grant for [Chat](https://www.twilio.com/docs/api/chat) and [Video](https://www.twilio.com/docs/api/video). Created using [Twilio official guide](https://www.twilio.com/blog/generate-access-token-twilio-chat-video-voice-using-twilio-functions).

## Requirements
- A Twilio Account
- Twilio account SID
- Twilio account Auth Token
- An API Key
- An API Secret
- A Chat Service SID

## Get started
1. Install [`twilio-cli`](https://www.twilio.com/docs/twilio-cli/quickstart)
   ```bash
   npm install twilio-cli -g
   ```
2. Add the Twilio Serverless Toolkit plugin
   ```bash
   twilio serverless:init token-service
   ```
2. Login into the Twilio CLI
   ```bash
   twilio login
   ```
   This will prompt you for your account credentials including your **Account SID** and your **Auth Token**, both of which are available on your [Twilio Console](https://www.twilio.com/console) dashboard.
3. Clone the repository
   ```bash
   git clone https://github.com/marsidev/twilio-token-service
   cd twilio-token-service
   ```
4. Install dependencies
   ```bash
   npm install
   ```
5. Create an `.env` file in the root of the project and add the following variables:
    ```bash
    ACCOUNT_SID=
    API_KEY=
    API_SECRET=
    SERVICE_SID=
    ```
6. Update the *`Access-Control-Allow-Origin`* in `functions/token.js`
7. Deploy to Twilio:
    ```bash
    twilio serverless:deploy
    ```
8. Use the service:
    ```bash
    curl token-service-XXXX-dev.twil.io/token
    ```