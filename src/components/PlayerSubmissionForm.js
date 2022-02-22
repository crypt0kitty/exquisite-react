import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [submission, setSubmission] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

// When a form field changes (user types in it)
  // update the state with the updated value
  const onFormFieldChange = (event) => {
    // figure out when input changed and
    // to what value
    // const fieldName = event.target.name; //name of html element
    // const newValue = event.target.value; //present value of html element

    // fill newformData with the original values
    const newFormData = {
      ...submission
    };

    // update the field that changed
    newFormData[event.target.name] = event.target.value; //looks at line 21 to look at the name of the new html field
    setSubmission(newFormData); //only part that touches react
  };

  const onFormSubmit = (event) => {
    // prevent the form from being submitted
  event.preventDefault();
    // Print user data
    // console.log(formData)
  props.sendSubmission(submission);
    // Clear the form
    setSubmission({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
};

return (
  <div className="PlayerSubmissionForm">
    {/* <h3>Player Submission Form for Player #{}</h3> */}
    <form 
      onSubmit={onFormSubmit} 
      className="PlayerSubmissionForm__form" 
    >

      <div className="PlayerSubmissionForm__poem-inputs">
        {
          // Put your form inputs here... We've put in one below as an example
        <div>
          <label>The </label>
          <input 
          onChange={onFormFieldChange} //state has changed
          placeholder='adjective'
          type="text"
          name='adj1'
          value={submission.adj1} //update the field
          />
          </div>
        }
        {
        <div>
          <input 
          onChange={onFormFieldChange}
          placeholder="noun"
          type="text"
          name='noun1'
          value={submission.noun1} 
          />
        </div>
        }
        {
        <div>
          <input
          onChange={onFormFieldChange}
          placeholder="adverb"
          type="text"
          name='adv'
          value={submission.adv} 
          />
        </div>
        }
        {
        <div>
          <input
          onChange={onFormFieldChange}
          placeholder="verb"
          type="text"
          name='verb'
          value={submission.verb} 
          />
        </div>
        }
        {
        <div>
          <label>the </label>
          <input
          onChange={onFormFieldChange}
          placeholder="adjective"
          type="text"
          name='adj2'
          value={submission.adj2} 
        />
        </div>
        }
        {
        <div>
          <input
          onChange={onFormFieldChange}
          placeholder="noun"
          type="text"
          name='noun2'
          value={submission.noun2} 
        />
        </div>
        }
      </div>
      <div className="PlayerSubmissionForm__submit">
        <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
      </div>
    </form>
  </div>
);
}
  

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
