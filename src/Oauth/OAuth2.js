const DiscordOAuth2 = require("discord-oauth2");

class OAuth2{
    constructor(prop = {}){
        if(!OAuth2.instance){
            this.clientId = prop.clientId;
            this.clientSecret = prop.clientSecret;
            this.redirectUri = prop.redirectUri;

            this.code = null;
            this.accessToken = null;
            this.refreshToken = null;
    
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

    async parseData(data){
        console.log(data);

        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;
        
        OAuth2.instance = this;
        console.log(this.accessToken, this.refreshToken)
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
    }).then(async (data) => {await this.parseData(data)});

};

export default OAuth2;