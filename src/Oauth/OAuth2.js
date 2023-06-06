const DiscordOAuth2 = require("discord-oauth2");

class OAuth2{
    constructor(prop = {}){
        if(!OAuth2.instance){
            this.clientId = prop.clientId;
            this.clientSecret = prop.clientSecret;
            this.redirectUri = prop.redirectUri;
    
            this.OAuth = new DiscordOAuth2({
                clientId : this.clientId,
                clientSecret : this.clientSecret,
                redirectUri : this.redirectUri,
            });

            OAuth2.instance = this;            
        }

        return OAuth2.instance;
    }
    
    setUserCode(code){
        OAuth2.instance.code = code;
    }

    GetRedirectURL() {
        return this.OAuth.generateAuthUrl({
            scope: ['identify', 'guilds'],
            responseType: 'code'
        })
    }

    async TokenRequest(){
        /*let response = */
        this.OAuth.tokenRequest({
            grantType: "authorization_code",
            code: this.code,

        }).then(response => {console.log(response)})
            
        // _instance.authorizationCode = response.access_token;
        // _instance.refreshToken = response.refresh_token;
        // return console.log("Authorization code has responsed: ", _instance.authorizationCode, _instance.refreshToken);
    }
};

export default OAuth2;