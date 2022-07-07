exports.handler = function (context, event, callback) {
  const twilioAccountSid = context.ACCOUNT_SID
	const twilioApiKey = context.API_KEY
	const twilioApiSecret = context.API_SECRET
	const twilioServiceSid = context.SERVICE_SID
  const identity = event.identity
  
  const { AccessToken } = Twilio.jwt
  const { VideoGrant, ChatGrant } = AccessToken

	const token = new AccessToken(
		twilioAccountSid,
		twilioApiKey,
		twilioApiSecret,
		{ identity }
  )
  
	const videoGrant = new VideoGrant()
  
  const chatGrant = new ChatGrant({
		serviceSid: twilioServiceSid
  })
  
  token.addGrant(videoGrant)
  token.addGrant(chatGrant)

  const response = new Twilio.Response()
	const headers = {
		'Access-Control-Allow-Origin': context.ORIGIN, // change this for your client-side URL, or '*' to allow all origins, or create an ORIGIN variable in your .env file
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json'
	}

	response.setHeaders(headers)
	response.setBody({
		accessToken: token.toJwt()
	})

	return callback(null, response)
}
