import React, {useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'

const Search = () =>{
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const {clearUsers, searchUsers, users} = githubContext;
  const {setAlert} = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setAlert('Please enter something', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='search Users...'
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>

      {users.length > 0 && (
        <button className='btn btn-block btn-light' onClick={clearUsers}>
          Clear Results
        </button>
      )}
    </div>
  );

}


export default Search;
