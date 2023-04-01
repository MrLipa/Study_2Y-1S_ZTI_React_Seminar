import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

enum ACTIONS {
  ADD = 'add',
  DELETE = 'delete',
  COMPLETE = 'complete'
}

interface Book {
  id: number;
  name: string;
  completed: boolean;
};

interface Payload {
  name?: string;
  id?: number;
}

interface Action {
  type: ACTIONS;
  payload: Payload;
}

interface State {
  books: Book[];
}

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD:
      return { books: [...state.books, newBook(payload.name)] };
    case ACTIONS.DELETE:
      return { books: state.books.filter(book => book.id !== payload.id) };
    case ACTIONS.COMPLETE:
      return { books: state.books.map(book => {
        if (book.id === payload.id){
          return { ...book, completed: !book.completed };
        } else {
          return book;
        }
      })}
    default:
      return state;
  }
}

function newBook(name: string = ''){
  return { id: Date.now(), name: name, completed: false};
}

function BookList() {
  const [state, dispatch] = useReducer(reducer, { books: [] });
  const [name, setName] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch({ type:ACTIONS.ADD, payload: {name: name} })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type='text' value={name} onChange={event => setName(event.target.value)} className="form-control" placeholder="Enter a book"></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Add book</button>
          </div>
        </div>
      </form>

      <ul className="list-group">
        {state.books.map((book, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <span style={{color: book.completed ? '#AAA' : '#000'}}>{book.name}</span>
            <div>
              <button className="btn btn-primary ml-auto" onClick={() => dispatch({ type:ACTIONS.COMPLETE, payload: {id: book.id} })}>Przeczytana</button>
              <button className="btn btn-primary ml-auto" onClick={() => dispatch({ type:ACTIONS.DELETE, payload: {id: book.id} })}>Usuń</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
