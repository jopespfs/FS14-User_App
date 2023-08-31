import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        navigate('/home')
    }
  return (
    <div>
      <main class="form-signin w-100 m-auto container mt-5" style={{maxWidth: '35%' }} >
        <form onSubmit={login}>
          <img
            class="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <Button className='w100 py-2' variant="primary" type='submit'>Sing In</Button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};
