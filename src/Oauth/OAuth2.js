const DiscordOAuth2 = require("discord-oauth2");

const OAuth2 = (() => {
    let _instance = null;

    return class OAuth2{
        constructor(prop = {}){
            if(_instance !== null){
                return _instance;
            };
            
            this.clientId = prop.clientId;
            this.clientSecret = prop.clientSecret;
            this.redirectUri = prop.redirectUri;

            this.OAuth = new DiscordOAuth2({
                clientId : this.clientId,
                clientSecret : this.clientSecret,
                redirectUri : this.redirectUri,
            });
            _instance = this;
        }
        
        setUserCode(code){
            this.code = code;
        }

        GetRedirectURL() {
            return this.OAuth.generateAuthUrl({
                scope: ["identify", "guilds"]
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
}});

export default OAuth2();