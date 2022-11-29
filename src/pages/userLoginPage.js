// super basic login page for now // will use firebase https://www.youtube.com/watch?v=9bXhf_TELP4&list=PLojo8XsHDJJoDEKxxijp1j2nw5Qt5QwY7&index=2 video tutorial on firebase setup

function LoginPage(){
    return(
        <div>
            <div>
                <h1>Register</h1>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <button>Create User</button>

            </div>
            <div>
                <h1>Login</h1>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <button>Login</button>
            </div>
        </div>
    )


} export default LoginPage