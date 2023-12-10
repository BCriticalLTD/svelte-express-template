<div class="row register-page">
  <div class="column">
    <form id="register-form" action="/api/register" method="POST" class="column">
      <h1>Join us today</h1>
      <small > Enter your email and password to register </small>
      <label id="register-name" for="name">Name</label>
      <input id="register-name-input" type="text" name="name" placeholder="Full Name"/>
      <label id="register-email" for="email">Email</label>
      <input id="register-email-input" type="text" name="email" placeholder="email"/>
      <label id="register-password" for="password">Password</label>
      <input id="register-password-input" type="password" name="password" placeholder="password"/>
      <div>
        <checkbox id="register-terms" name="terms" />I agree to the terms and conditions
      </div>
      <button id="register-submit" type="submit">Sign up</button>
    </form>
  </div>
</div>

<style>
  .register-page {
    justify-content: center;
    align-items: center;
    height:100vh;
    &.register-form {
      --background: var(--background-light, white);
      --color: var(--text-dark-color, black);
      --padding: var(--p, 1rem);
      display: flex;
      flex-direction: column;
      padding: var(--padding);
      color: var(--color);
      background: var(--background);
      border-radius: 1rem;
    }
  }
</style>