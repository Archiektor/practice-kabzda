import React, {useState} from 'react';

type UsersType = {
    users: string[];
};

export const ReactMemoComponent = () => {
    //console.log('ReactMemoComponent render')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Nikki', 'Vikki', 'Anya', 'Bob']);

    const RenderUsers: React.FC<UsersType> = ({users}) => {
        console.log('RenderUsers render');
        return (
            <div>
                {users.map((user, idx) => (
                    <div key={idx}>{user}</div>
                ))}
            </div>
        );
    };

    const Users = React.useMemo(() => {
        return <RenderUsers users={users}/>
    }, [users]);

    return (
        <>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
            </div>
            {Users}
        </>
    );
};