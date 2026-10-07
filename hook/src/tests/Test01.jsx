const Test01 = () => {
    const users = [
        {id:1, name:"홍길동"},
        {id:2, name:"이순신"}
    ];

    return(
        <ul>
            {users.map((user) => (
                <li key={users.id}>{users.name}</li>
            ))}
        </ul>
    )
}

export default Test01;