const signin = () => {
    return (
        <div id="sign-in-container">
            <form action="/users/create-session" method="post">
                <label for="email_username">Username or E-Mail</label> <br />
                <input type="text" id="email_username" name="email_username" placeholder="username/email@abc.com" />

                <br />

                <label for="password">Password
                </label> <br />
                <input type="password" id="password" name="password" />

                <br />

                <button type="submit" id="submit">LOGIN</button>
            </form>

            <div id="newUser">
                <p>New User?</p>
                <div>
                    <a href="/users/sign-up">Register</a>
                </div>
            </div>

        </div>
    );
}

export default signin;