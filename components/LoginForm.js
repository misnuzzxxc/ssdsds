import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ updateUserName }) => {
  const [id, setId] = useState('');
  const [password,setPassword] =useState('');
  const[loginFailed, setLoginFailed] =useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctEmail = '1234';
    const correctPassword = '1234';
    const name = '김동혁';
  
    if (id === correctEmail && password === correctPassword) {
      updateUserName(id);
      navigate('/UserApproval');
    } else {
      setLoginFailed(true);
    }
  };

    return (
        <section className="main">
            <div className="m_login">
            <h3>
                <span>
                    <img src={require("../img/main/log_img.png")} alt="" />
            </span>LOGIN</h3>
            <div className="log_box">
                <form>
                <div className="in_ty1">
                    <span>
                        <img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                    <input 
                        type="text" 
                        id="email_val" 
                        name="email" 
                        placeholder="이메일" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <div className="in_ty1">
                        <span className="ic_2">
                            <img src={require("../img/main/m_log_i2.png")} alt="" />
                        </span>
                        <input 
                        type="password" 
                        placeholder="비밀번호" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <ul className="af">
                        <li>
                        {loginFailed && <p className="login-failed">로그인에 실패했습니다.</p>}
                        <button className="s_bt" type="button" onClick={handleLogin}>로그인</button>
                        </li>
                        <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
                        <li>
                        {loginFailed && <Link to={'/signup'}>회원가입</Link>}
                        {!loginFailed && <Link to={'/signup'}>회원가입</Link>}
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
        </section>
        );
    }
export default LoginForm;