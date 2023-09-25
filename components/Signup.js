import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Signup = () =>{
    const navigate =useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/'); // 성공 페이지 경로에 맞게 수정
    };

    return (
        <div>
            <section className="sub_wrap" >
                <article className="s_cnt re_1 ct1">
                    <div className="li_top">
                        <h2 className="s_tit1" style={{textAlign: "center"}} >회원가입</h2>
                        <form action='/Register' method="post" name="frm">
                            <div className="re1_wrap">
                                <div className="re_cnt ct2">
                                    <table className="table_ty1">
                                        <tr className="re_email">
                                            <th>이메일</th>
                                            <td>
                                                <input id="email_val" type="text" name="email1"
                                                       placeholder="이메일을 입력해주세요."/>
                                                <span className="e_goll">@</span>
                                                <select id="email2_val" name="email2" className="select_ty1">
                                                    <option value="">선택하세요</option>
                                                    <option value='naver.com'>naver.com</option>
                                                    <option value='hanmail.net'>hanmail.net</option>
                                                    <option value='nate.com'>nate.com</option>
                                                    <option value='hotmail.com'>hotmail.com</option>
                                                    <option value='gmail.com'>gmail.com</option>
                                                    <option value='yahoo.co.kr'>yahoo.co.kr</option>
                                                    <option value='yahoo.com'>yahoo.com</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>비밀번호</th>
                                            <td>
                                                <input id="pwd_val" type="password" name="password1"
                                                       placeholder="비밀번호를 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>비밀번호 확인</th>
                                            <td>
                                                <input id="pwd_cnf_val" type="password" name="password2"
                                                       placeholder="비밀번호를 다시 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>성명</th>
                                            <td>
                                                <input id="name_val" type="text" name="userName"
                                                       placeholder="성명을 입력해주세요."/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전공</th>
                                            <td>
                                                <input id="major_val" type="text" name="specialization"
                                                       placeholder="전공을 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr className="tr_tel">
                                            <th>핸드폰</th>
                                            <td>
                                                <select id="phone1_val" name="phone1" className="select_ty1">
                                                    <option value="">선택</option>
                                                    <option value="010">010</option>
                                                    <option value="011">011</option>
                                                    <option value="016">016</option>
                                                    <option value="017">017</option>
                                                    <option value="018">018</option>
                                                    <option value="019">019</option>
                                                </select>
                                                <span className="tel_dot">-</span>
                                                <input id="phone2_val" name="phone2" max="9999"
                                                       maxlength="4" />
                                                <span className="tel_dot">-</span>
                                                <input id="phone3_val" name="phone3" max="9999"
                                                       maxlength="4" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="btn_confirm">
                                <button className="bt_ty bt_ty2 submit_ty1" type="submit" onClick={handleSubmit}>회원가입</button>
                            </div>
                            <div className="LoginForm-link">
                                이미 계정이 있으신가요? <Link to="/">로그인</Link>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Signup;
