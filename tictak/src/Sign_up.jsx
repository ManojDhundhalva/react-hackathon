const Signup = () => {
    return (
        <div id="sign-up-container">
            <form action="/users/new-user" method="post">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="username" />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="email" name="email" placeholder="email@abc.com" />
                </div>
                <div>
                    <label htmlFor="password">Create Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label htmlFor="re_password">Re-enter Password</label>
                    <input type="password" id="re_password" name="re_password" />
                </div>
                <div>
                    <label htmlFor="role">You are</label>
                    <div id="role">
                        <input type="radio" id="community" name="role" value="community" />
                        <label htmlFor="option1">Local Community</label>

                        <input type="radio" id="client" name="role" value="client" />
                        <label htmlFor="option2">Client</label>

                        <input type="radio" id="builder" name="role" value="builder" />
                        <label htmlFor="option3">Builder</label>
                    </div>
                    <div>
                        <label htmlFor="company">Enter Associated Project if you are a local <br />community else
                            enter your company name</label>
                        <input type="text" id="company" name="company" />
                    </div>
                </div>
                <div id="button">
                    <button type="submit" id="submit">Register</button>
                </div>

            </form>
        </div>
    );
}

export default Signup;