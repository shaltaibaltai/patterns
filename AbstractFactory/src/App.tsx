import { useState, type ReactNode } from 'react'
import './App.css'

interface FormFactory {
  createFields: () => React.ReactNode;
  createSubmitHandler: () => (e: React.FormEvent) => void;
}

const EmailLoginFactory:FormFactory = {
  createFields: () => {
    return <div className='fieldsGroup'>
      <div className='field'>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className='field'>
        <label>Пароль</label>
        <input type="password" />
      </div>
    </div>
  },
  createSubmitHandler: () => {
    return (e) => {
      e.preventDefault();
      alert("Login by Email");
    }
  }
}

const PhoneLoginFactory:FormFactory = {
  createFields: () => {
    return <div className='fieldsGroup'>
      <div className='field'>
        <label>phone</label>
        <input type="phone" />
      </div>
    </div>
  },
  createSubmitHandler: () => {
    return (e) => {
      e.preventDefault();
      console.log("Login by Phone");
    }
  }
}

function LoginForm({factory}: {factory: FormFactory}) {
  const fields = factory.createFields();
  const submitHandlers = factory.createSubmitHandler();

  return (
    <form onSubmit={submitHandlers}>
      {fields}
      <button type="submit">Sign In</button>
    </form>
  )
}


function App() {
  const [mode, setMode] = useState("byEmail");

  const formFactory = mode === "byEmail" ? EmailLoginFactory : PhoneLoginFactory;

  return (
    <>
      <h1>Login</h1>
      <div className="buttonsGroup">
        <button onClick={() => setMode("byEmail")}>By Email</button>
        <button onClick={() => setMode("byPhone")}>By Phone</button>
      </div>
      <LoginForm key={mode} factory={formFactory}/>
    </>
  )
}

export default App
