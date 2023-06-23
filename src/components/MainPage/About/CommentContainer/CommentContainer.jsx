import React from "react";
import './CommentContainer.css';
import user1 from './Avriel.png';
import user2 from './Mevik.png'


const CommentContainer = () => {
    return(
        <div className="con">
            <div className="comment_container">
                <div className="left_comment">
                    <div className="user_image_con">
                        <img src={user2} className="user_icon2"/>
                        <img src={user2} className="user_icon"/>
                    </div>
                    <h2>xmevik</h2>
                    <h1>
                        Привет, я Mevik, занимаюсь разработкой бота.
                    </h1>
                </div>
                <div className="right_comment">
                    <h1>
                        Привет, я же в свою очередь _Avriel, и я занимаю разработкой сайта, чтобы вам было удобней работать с ботом :{')'}
                    </h1>
                    <h2>_avriel</h2>
                    <div className="user_image_con">
                        <img src={user1} className="user_icon2"/>
                        <img src={user1} className="user_icon"/>
                    </div>
                </div>
                <div className="left_comment">
                    <div className="user_image_con">
                        <img src={user2} className="user_icon2"/>
                        <img src={user2} className="user_icon"/>
                    </div>
                    <h2>xmevik</h2>
                    <h1>
                        Теперь вы знаете кого обвинить в проблемах бота.
                    </h1>
                </div>
                <div className="right_comment">
                    <h1>
                        А так же проблемах сайта.
                    </h1>
                    <h2>_avriel</h2>
                    <div className="user_image_con">
                        <img src={user1} className="user_icon2"/>
                        <img src={user1} className="user_icon"/>
                    </div>
                </div>
                <div className="left_comment">
                    <div className="user_image_con">
                        <img src={user2} className="user_icon2"/>
                        <img src={user2} className="user_icon"/>
                    </div>
                    <h2>xmevik</h2>
                    <h1>
                        По любым вопросам, вы можете обратиться в наш официальный дискорд сервер. Мы постараемся вам помочь. Надеюсь.
                    </h1>
                </div>
                <div className="right_comment">
                    <h1>
                        И не забудьте оставить свои желания и улучшения для нашего сервиса, мы будем рады выслушать всех.
                    </h1>
                    <h2>_avriel</h2>
                    <div className="user_image_con">
                        <img src={user1} className="user_icon2"/>
                        <img src={user1} className="user_icon"/>
                    </div>
                </div>
                <div className="left_comment">
                    <div className="user_image_con">
                        <img src={user2} className="user_icon2"/>
                        <img src={user2} className="user_icon"/>
                    </div>
                    <h2>xmevik</h2>
                    <h1>
                        Спасибо что выбрали наш сервис, для нас это важно!
                    </h1>
                </div>
                <div className="right_comment">
                    <h1>
                        Мы будем рады видеть вас в нашем сообществе!
                    </h1>
                    <h2>_avriel</h2>
                    <div className="user_image_con">
                        <img src={user1} className="user_icon2"/>
                        <img src={user1} className="user_icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentContainer;