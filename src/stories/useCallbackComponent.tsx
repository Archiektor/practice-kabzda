import React, {useState} from 'react';

type NewMessageCounterType = {
    counter: number;
};

type BooksType = {
    books: string[];
};

export const UseCallBackComponent: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS', 'React']);

    const NewMessageCounter: React.FC<NewMessageCounterType> = ({counter}) => {
        return <div>{counter}</div>;
    };

    const BooksSecret: React.FC<BooksType> = ({books}) => {
        console.log('Books');
        return (
            <div>
                {books.map((book, idx) => (
                    <div key={idx}>{book}</div>
                ))}
            </div>
        );
    };

    // think useCallback is no longer exist
    const memoizedBooksComponent = React.useMemo(() => <BooksSecret books={books}/>, [books]);
    //const memoizedBooksComponent = React.useCallback(() => <BooksSecret books={books}/>, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessageCounter counter={counter}/>
            {memoizedBooksComponent}
        </>
    );
};