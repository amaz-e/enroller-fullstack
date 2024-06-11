import {useState} from "react";

export default function LoginForm({onLogin, buttonLabel}) {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

//        async function handleRegister(participant) {
//            const response = await fetch(`/participants`, {
//                method: 'POST',
//                body: JSON.stringify({login: username, password: password}),
//                headers: { 'Content-Type': 'application/json' }
//            });
//            if (response.ok) {
//                const nextMeetings = meetings.map(m => {
//                    if (m === meeting) {
//                        m.participants = [...m.participants, username];
//                    }
//                    return m;
//                });
//                setMeetings(nextMeetings);
//            }
//        }

    return <div>
        <label>Zarejestruj się</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => onLogin(email)}>{buttonLabel || 'Wchodzę'}</button>

         <label>Zaloguj się loginem i hasłem</label>
         <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
         <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button type="button" onClick={() => onLogin(login)}>{buttonLabel || 'Zarejestruj'}</button>
    </div>;
}
