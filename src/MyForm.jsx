import { Form, Field } from 'react-final-form'

const MyForm = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    return errors;
  }; 
  
  const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
  }

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      {({ handleSubmit, values }) => (
        <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="employed">Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <Field name="education" component="select">
              <option />
              <option value="highSchool">High School</option> 
              <option value="college">College</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </Field>
          </div>
          <div>
            <label htmlFor="expertise">Expertise</label>
            <Field name="expertise" component="input" type="checkbox" value="html" /> HTML
            <Field name="expertise" component="input" type="checkbox" value="css" /> CSS
            <Field name="expertise" component="input" type="checkbox" value="javascript" /> JavaScript
            <Field name="expertise" component="input" type="checkbox" value="nodejs" /> NodeJS
            <Field name="expertise" component="input" type="checkbox" value="reactjs" /> ReactJS
          </div>
          <div>
            <label htmlFor="preferred_tech">Preferred Technology</label>
            <Field name="preferred_tech" component="input" type="radio" value="frontend" /> Frontend
            <Field name="preferred_tech" component="input" type="radio" value="backend" /> Backend
            <Field name="preferred_tech" component="input" type="radio" value="fullstack" /> Fullstack
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <Field name="notes" component="textarea" />
          </div>
          <button type="submit">Submit</button>
          <button type="button" name="reset" onClick={() => {}}>Reset</button>
        </form>

        <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
      )}
    </Form>
  )
}

export default MyForm