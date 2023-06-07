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

    tokenRequest = () => this.OAuth.tokenRequest({
        code: this.code,
        grantType: "authorization_code"
    })

};

export default OAuth2;