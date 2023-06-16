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
            this.userName = null;
            this.avatar = null;
            this.userId = null;
    
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

        OAuth2.instance = this;
    }

    async parseTokens(data){

        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;
        
        OAuth2.instance = this;
    }

    GetRedirectURL() {
        return this.OAuth.generateAuthUrl({
            scope: ['identify', 'guilds'],
            responseType: 'code'
        })
    }

    tokenRequest = async () => await this.OAuth.tokenRequest({
        code: this.code,
        grantType: "authorization_code"
    }).then(async (data) => {
        await this.parseTokens(data);
        await this.getUser()
    });

    getUser = async () => { 
        
        await this.OAuth.getUser(this.accessToken).then((response) => {
            this.userId = response.id;
            this.avatar = response.avatar;
            this.userName = response.username;
        });
    }
}
export default OAuth2;