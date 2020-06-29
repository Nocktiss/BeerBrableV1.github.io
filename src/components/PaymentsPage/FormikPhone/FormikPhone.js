import React from 'react';
import { Col,Container, CardTitle } from 'reactstrap';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(10, '*Les informations saisies ne sont pas valides.')
    .max(10, '*Les informations saisies ne sont pas valides.')
    .required('*champ obligatoire'),
 
});
export default class FormikPhone extends React.Component {
   

    render() {
  
      return (
<Container className='containerFormikPhoneForNumber' >
        <Col sm="12" className=''>
        <CardTitle className='cardTitleFormikPhone'>Nous t'enverrons un SMS quand ta commande sera prête</CardTitle>

        <CardTitle className='cardTitleFormikPhone'> Entre ton numéro de téléphone </CardTitle>
    <Formik
      initialValues={{
        firstName: '',
     
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form >
        <div className="formFormikPhoneForm"> 
          <Field className="fieldFormikPhonefiel" name="firstName" placeholder="06 XX XX XX XX"/>
          </div>
          <div className="errorsFormikPhoneErrors">  
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
           
          ) : null}
          </div>
         
        </Form>
      )}
    </Formik>

  </Col>
  </Container>
      );
    }
  };
  