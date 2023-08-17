import { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import contacts from './data/ContactsJson.json';

export class App extends Component {
  state = {
    contacts: contacts.contacts,
  };

  formDeleteHandler = contactsId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== contactsId
      ),
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <Container>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.formAddHandler} />
        </Section>

        <Section title={'Filter'}>
          <Filter />
        </Section>

        <Section title={'Contacts'}>
          <Contacts
            contacts={this.state.contacts}
            formDeleteHandler={this.formDeleteHandler}
          />
        </Section>
      </Container>
    );
  }
}
