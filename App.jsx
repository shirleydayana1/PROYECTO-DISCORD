import './App.css'


function App() {

  return (
    <div>
      <h1 >Create account</h1>
      <form>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" />
        </div>
        <button>Continue</button>
        <a href="#">Already have an account?</a>
        <span>By registering, you agree to Discord's <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.</span>
      </form>
    </div>
  )
}

export default App
