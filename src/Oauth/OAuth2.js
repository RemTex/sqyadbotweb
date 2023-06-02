const DiscordOAuth2 = require("discord-oauth2");

class OAuth2{
    constructor(clientId, clientSecret, redirectUri){
        
        this.OAuth = new DiscordOAuth2({
            clientId : clientId,
            clientSecret : clientSecret,
            redirectUri : redirectUri,
        });
    }
    
    setUserCode(code){
        this.code = code;
    }

    GetRedirtecrtURL() {
        return this.OAuth.generateAuthUrl({
            scope: ["identify"]
        })
    }

    TokenRequest(){
        let response = JSON.parse(this.OAuth.tokenRequest({
            grantType: "authorization_code",
            code: this.code,

        }))
        this.authorizationCode = response.access_token;
        this.refreshToken = response.refresh_token;
        return console.log("Authorization code has responsed: ", this.authorizationCode, this.refreshToken);
    }
}

export default OAuth2;