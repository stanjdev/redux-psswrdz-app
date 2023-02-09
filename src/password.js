import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addPassword} from './features/passwords/passwordsSlice.js'
import PasswordsList from './PasswordsList.js';
import zxcvbn from 'zxcvbn'

function generatePassword() {
  let pw = '';
  for (let i = 0; i < 12; i++) {
    const charCode = Math.floor(Math.random() * (127 - 33) + 33);
    const char = String.fromCharCode(charCode);
    pw += char;
  }
  return pw;
}

export default function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const setNewPW = () => {
    setPassword(generatePassword)
  };

  const savePassword = () => {
    if (password && name) {
      dispatch(addPassword({password, name}))
      setPassword('')
      setName('')
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(evt) => setName(evt.target.value)}
          value={name}
          placeholder="Name for Password"
          required
        />
        <input
          type="text"
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          placeholder="New Password"
          required
        />
        <div
          style={{padding: '8px'}}
        >password score: <span style={{borderRadius: '8px', padding: '8px', backgroundColor: `${
          zxcvbn(password).score > 3 ? "green"
          : zxcvbn(password).score > 2 ? "yellow"
          : zxcvbn(password).score > 1? "orange"
          : "red"
        }`, }}>{`${zxcvbn(password).score} / 4`}</span></div>
        <button
          className="generate-button"
          onClick={setNewPW}
        >Generate Random Password</button>
        <button
          className=''
          type='submit'
          onClick={savePassword}
        >Save</button>
      </div>
      <div>Saved Passwords: <PasswordsList /></div>
    </div>
  )
}

