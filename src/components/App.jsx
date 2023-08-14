import { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
  };

  formAddHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.formAddHandler} />
        </Section>
        <Section title={'Filter'}>
          <Filter />
        </Section>
      </Container>
    );
  }
}
