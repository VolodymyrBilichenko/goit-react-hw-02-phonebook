import { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  formAddHandler = data => {
    console.log(data);
  }

  render() {
    return (
      <Container>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.formAddHandler}/>
        </Section>
      </Container>
    );
  }
}
