const DiscordOAuth2 = require("discord-oauth2");


class OAuth2{
    constructor(prop = {}){

        this.clientId = prop.clientId;
        this.clientSecret = prop.clientSecret;
        this.redirectUri = prop.redirectUri;
        this.accessToken = prop.accessToken;
        this.refreshToken = prop.refreshToken;
        this.code = prop.code;
        this.userId = prop.userId;
        this.globalName = prop.globalName;
        this.avatar = prop.avatar;
        this.avatarURL = prop.avatarURL;
        this.guilds = prop.guilds;
        this.expiresIn = prop.expiresIn;
        this.createdAt = prop.createdAt;

        this.OAuth = new DiscordOAuth2({
            clientId : this.clientId,
            clientSecret : this.clientSecret,
            redirectUri : this.redirectUri,
        });
    }

    unsign(){
        localStorage.removeItem('authenticated_user');
    }
    
    setUserCode(code){
        this.code = code;
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
            this.accessToken = data.access_token;
            this.refreshToken = data.refresh_token;
            this.expiresIn = data.expires_in;
            this.createdAt = Date.now();

            await this.userRequest();
            await this.userGuildsRequest();
    });

    refreshTokenRequest = async () => await this.OAuth.tokenRequest({
        grantType: 'refresh_token',
        refreshToken: this.refreshToken
    }).then(async data => {
        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;
        this.expiresIn = data.expires_in;
        this.createdAt = Date.now();
        
        await this.userRequest();
        await this.userGuildsRequest();
    });

    userRequest = async () => {
        await this.OAuth.getUser(this.accessToken).then((response) => {
            this.userId = response.id;
            this.avatar = response.avatar;
            this.globalName = response.global_name;
            this.avatarURL = `https://cdn.discordapp.com/avatars/${this.userId}/${this.avatar}.png`;
        });
    }

    userGuildsRequest = async () => {
        await this.OAuth.getUserGuilds(this.accessToken).then(response => {
            this.guilds = response;
        })
    }
}
export default OAuth2;