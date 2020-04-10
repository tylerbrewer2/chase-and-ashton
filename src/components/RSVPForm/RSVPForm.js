import React from 'react';

// Components
import Form from '../Form';
import TextInputGroup from '../TextInputGroup';
import TextAreaGroup from '../TextAreaGroup';

// Utilities
import AttendeeCreator from '../../utilities/AttendeeCreator';


export default class RSVPForm extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    attending: '',
    food: '',
    extraAttendees: '',
    guestFood: '',
    songSuggestion: '',
    message: '',
    response: undefined,
  }

  onChange = (e) => {
    const state = Object.assign({}, this.state)
    state[e.currentTarget.name] = e.currentTarget.value
    this.setState(prev => ({
      ...prev,
      ...state,
    }));
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const state = Object.assign({}, this.state)
    delete state.response
    const attendeeCreator = new AttendeeCreator(state);
    const response = await attendeeCreator.create({ successMessage: 'RSVP successfully sent.' })
    this.setState(prev => ({
      ...prev,
      response,
    }));
  }

  render() {
    return (
      <section>
        <Form
          onSubmit={this.onSubmit}
          title="RSVP for December 2nd, 2017"
          mobileWidth={10}
          tabletWidth={6}
          requestResponse={this.state.response}
        >
          <TextInputGroup
            labelText="Email*"
            identifier="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="First Name*"
            identifier="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="Last Name*"
            identifier="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="Will you be attending?*"
            identifier="attending"
            value={this.state.attending}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="We will be having a taco bar, do you have any dietary restrictions? If so, what are they?"
            identifier="food"
            value={this.state.food}
            onChange={this.onChange}
          />

          <TextInputGroup
            labelText="Who else is coming with you?"
            identifier="extraAttendees"
            value={this.state.extraAttendees}
            onChange={this.onChange}
          />

          <TextInputGroup
            labelText="Does your guest have any dietary restrictions? If so, what are they?"
            identifier="guestFood"
            value={this.state.guestFood}
            onChange={this.onChange}
          />

          <TextInputGroup
            labelText="Do you have any song suggestions?"
            identifier="songSuggestion"
            value={this.state.songSuggestion}
            onChange={this.onChange}
          />

          <TextAreaGroup
            labelText="Are you as excited as we are? Let us know!"
            identifier="message"
            value={this.state.message}
            onChange={this.onChange}
          />
        </Form>
      </section>
    )
  }
};
