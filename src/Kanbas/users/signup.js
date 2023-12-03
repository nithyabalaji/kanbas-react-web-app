import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/Account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="p-3">
            <h1>Sign Up</h1>
            {error && <div>{error}</div>}
            <input
                className="form-control w-50"
                value={credentials.username}
                placeholder="Username"
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <input
                className="form-control w-50"
                value={credentials.password}
                placeholder="Password"
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <button className="btn btn-danger w-50" onClick={signup}>
                Sign Up
            </button>
        </div>
    );
}
export default Signup;