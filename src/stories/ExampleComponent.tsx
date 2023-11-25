import React, {useState} from 'react';

type NewMessageCounterType = {
    counter: number;
};

type UsersType = {
    users: string[];
};

export const ExampleComponent: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Nikki', 'Vikki', 'Anya', 'Bob']);

    const NewMessageCounter: React.FC<NewMessageCounterType> = ({counter}) => {
        return <div>{counter}</div>;
    };

    const UsersSecret: React.FC<UsersType> = ({users}) => {
        console.log('Users');
        return (
            <div>
                {users.map((user, idx) => (
                    <div key={idx}>{user}</div>
                ))}
            </div>
        );
    };

    const memoizedUsersComponent = React.useMemo(() => <UsersSecret users={users}/>, [users]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessageCounter counter={counter}/>
            {memoizedUsersComponent}
        </>
    );
};