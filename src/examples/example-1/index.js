/**
 * @module ExampleComponent
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @typedef PersonObject
 * @property {number} id - The person's id.
 * @property {string} name - The person's name.
 * @property {string} email - The person's email.
 * @property {string} [bio] - The person's bio.
 */
/**
 * The ExampleComponent component.
 *
 * @alias module:ExampleComponent
 *
 * @param {object} props - The component props object.
 * @param {string} [props.heading] - The component heading.
 * @param {Array<PersonObject>} [props.people] - An array of people.
 *
 * @returns {React.ReactElement} - The ExampleComponent component.
 */
export function ExampleComponent({ heading, people, ...props }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul {...props}>
        {people.map((person) => {
          return (
            <li key={person.id}>
              {person.name} &lsaquo;{person.email}&rsaquo;
              {person.bio ? (
                <>
                  <br />
                  {person.bio}
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </>
  )
}

ExampleComponent.propTypes = {
  heading: PropTypes.string,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      bio: PropTypes.string,
    }),
  ),
}

ExampleComponent.defaultProps = {
  heading: '',
  people: [],
}
