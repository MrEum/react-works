// 리스트 렌더링 list rendering

const Exameple02 = () => {
    const items = ['apple', 'banana', 'orange'];

    return (
        <div>
            <h2>List Rendering</h2>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="fruit">{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Exameple02;