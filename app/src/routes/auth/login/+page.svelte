<div class="row login-page">
  <div class="column">
    <form id="login-form" method="POST" class="column">
      <h1>Welcome Back</h1>
      <small > Enter your email and password to sign in </small>
      <label id="login-email" for="email">Email</label>
      <input id="login-email-input" type="text" name="email" placeholder="email"/>
      <label id="login-password" for="password">Password</label>
      <input id="login-password-input" type="password" name="password" placeholder="password"/>
      <button id="login-submit" type="submit">Sign in</button>
    </form>
  </div>
</div>
<style>
  .login-page {
    justify-content: center;
    align-items: center;
    height:100vh;
    &.login-form {
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