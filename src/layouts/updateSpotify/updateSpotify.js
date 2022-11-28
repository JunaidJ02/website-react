import './updateSpotify.css'
import React from 'react'


function UpdateSpotify() {

    return (
        <div>
            <div>
                <div id="login">
                    <h1>First, log in to spotify</h1>
                    <a href="/login">Log in</a>
                </div>
                <div id="loggedin">
                </div>
            </div>

            <script id="loggedin-template" type="text/x-handlebars-template">
                <h1>Logged in as </h1>
                <img id="avatar" width="200" src="" />
                <dl>
                    <dt>Display name</dt><dd></dd>
                    <dt>Username</dt><dd></dd>
                    <dt>Email</dt><dd></dd>
                    <dt>Spotify URI</dt><dd><a href=""></a></dd>
                    <dt>Link</dt><dd><a href=""></a></dd>
                    <dt>Profile Image</dt><dd></dd>
                </dl>
                <p><a href="/">Log in again</a></p>
            </script>
        </div >
    )
}

export default UpdateSpotify

