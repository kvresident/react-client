
function Login(){
    return(
        <form action="">
            <fieldset>
                <legend>Login</legend>
                <label htmlFor="email" className="input-container">
                    <span>Email</span>
                    <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" name="password" id="password" />
                </label>
                <button>submit</button>
            </fieldset>
        </form>
    )
}

export default Login;