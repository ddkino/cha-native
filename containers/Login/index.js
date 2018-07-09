import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import MyTextInput from '../../components/Form/MyInputText';

function submit(values) {
  console.log('submit', values);
}

// Validate with validator
function validate(values) {
  console.log(values);
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Validate login : username or email if taken on signup
// Check asyncBlurFields
function asyncValidate(values /*, dispatch */) {
  console.log('asyncValidate', values);

  return sleep(1000) // simulate server latency
    .then(() => {
      if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        throw { username: 'That username is taken' };
      }
    });
}

function MyForm(props) {

  const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text>Email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
      />
      <Text>The form is: ddd</Text>
      <Text>The form is: ddd</Text>
      {
        formStates.filter((state) => props[state]).map((state) => {
          return <Text key={state}> - {state}</Text>;
        })
      }
      <TouchableOpacity onPress={props.handleSubmit(submit)}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({
  form: 'signIn',
  validate,
  asyncValidate,
  asyncBlurFields: []
})(MyForm);
