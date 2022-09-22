import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: { ...formState },
      });

      setFormState({
        thoughtText: '',
        thoughtAuthor: '',
      });
    } catch (err) {
     // console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Tell us about your favorite beer!</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center bg-info"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="thoughtText"
            placeholder="Here's what I think!"
            value={formState.thoughtText}
            className="form-input w-100 bg-dark text-white"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor"
            placeholder="Add your name"
            value={formState.thoughtAuthor}
            className="form-input w-100 bg-dark text-white"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-dark text-info btn-block py-3" type="submit">
            Add Thought
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-info p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;
