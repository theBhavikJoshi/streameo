import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions/index';

class StreamNew extends React.Component{

  renderErrors = ({ error, touched }) => {
    if ( touched && error ) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        {this.renderErrors(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className="ui button basic primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) errors.title = 'You must enter a Title';
  
  if (!formValues.description) errors.description = 'You must enter a Description';
  
  return errors;
}

export default connect(
  null, { createStream }
)(reduxForm({
  form: 'createStream',
  validate
})(StreamNew));
