const Example03 = () => {

    const handleClick = () => {
        alert('button clicked');
    }
    // 입력값변경
    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className='app'>
            <h2>Event handler</h2>
            {/* 클릭할때만 작동해야 함수 호출할 때 소괄호 생략함 */}
            <button onClick={handleClick}>click me</button>
            <p>
            <input 
                type="text"
                onChange = {handleInputChange} 
                placeholder="text input"            
            /> 
            </p>     
        </div>
        
    );
}

export default Example03;