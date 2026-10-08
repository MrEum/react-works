import { Link } from "react-router-dom";
// 상단 메뉴가 있는 컴포넌트
const Header = () =>{
    return(
        <div>
            <div className='header'>
            <Link to ="/">Home</Link>
            <Link to ="/sign_up">회원가입</Link>
            <Link to ="/login">로그인</Link>
            <Link to ="/information">소개</Link>
          </div>
        </div>
    )
}
export default Header;