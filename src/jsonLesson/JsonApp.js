import React from 'react';
import Users from './user.json';
import '../jsonLesson/main.css'

const JsonApp = () => {
    return (
        <div>
            {
                Users.map((post)=>{
                    return(
                        <div className="infos">
                            <h1>Ismi: {post.name}</h1>
                            <h1>Yoshi: {post.age}</h1>
                            <h1>Telfon raqami: {post.phone}</h1>
                            <h1>Mamlakat: {post.Country}</h1>
                         

                        </div>
                    )
                })
            }
        </div>
    );
};



export default JsonApp;