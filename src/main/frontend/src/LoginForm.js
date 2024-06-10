import {useState} from "react";

export default function LoginForm({onLogin, buttonLabel}) {
    const [email, setEmail] = useState('');

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => onLogin(email)}>{buttonLabel || 'Wchodzę'}</button>

         <label>Zaloguj się loginem i hasłem</label>
         <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
         <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button type="button" onClick={() => onLogin(login)}>{buttonLabel || 'Wchodzę'}</button>
    </div>;
}
