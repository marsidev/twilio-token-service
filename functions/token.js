exports.handler = function (context, event, callback) {
	const twilioAccountSid = context.ACCOUNT_SID
	const twilioApiKey = context.API_KEY
	const twilioApiSecret = context.API_SECRET
	const twilioServiceSid = context.SERVICE_SID
	const identity = event.identity

	const { AccessToken } = Twilio.jwt
	const { ChatGrant, VideoGrant } = AccessToken

	const videoGrant = new VideoGrant()
	const chatGrant = new ChatGrant({
		serviceSid: twilioServiceSid
	})

	const token = new AccessToken(
		twilioAccountSid,
		twilioApiKey,
		twilioApiSecret,
		{ identity }
	)

	token.addGrant(chatGrant)
	token.addGrant(videoGrant)

	const response = new Twilio.Response()
	const headers = {
		'Access-Control-Allow-Origin': '*', // change this for your client-side URL
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json'
	}

	response.setHeaders(headers)
	response.setBody({
		success: true,
		accessToken: token.toJwt()
	})

	return callback(null, response)
}
