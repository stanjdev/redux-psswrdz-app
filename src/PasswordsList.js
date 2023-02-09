import {useSelector} from 'react-redux';

export default function PasswordsList() {
  const passwords = useSelector((state) => state.passwords.value)

  return (
    <ul style={{listStyle: 'none'}}>
      {passwords.map((password, i) => (
        <li key={`${i}-item`}>{password.name} : <span className="password-saved">{password.password}</span></li>
      ))}
    </ul>
  );
}
