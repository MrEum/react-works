// 외부 컴포넌트 생성 
// 조건부 렌더링 conditional rendering

const Example01 = () => {
    const isLogin = true;

    let result = "";
    if(isLogin) {
        result = <p>Welcome back!</p>;
    } else {
        result = <p>Please log in.</p>;
    }

    return (
        <div>
            <h2>conditional rendering</h2>
            {result}
            {/* 삼항연산자 */}
            {isLogin ? <p>Welcome back!</p> : <p>Please log in.</p>}

            {/* &&연산자 */}
            {isLogin && <p>Welcome back!</p>}
            
        </div>
    )
}

export default Example01;