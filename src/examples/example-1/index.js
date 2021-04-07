/**
 * @module ExampleComponent
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * StatusType ENUMs.
 */
const statusTypes = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

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
  const [loadingStatus, setLoadingStatus] = React.useState(statusTypes.PENDING)

  React.useEffect(() => {
    async function loadData() {
      await new Promise((resolve) => {
        setTimeout(resolve('some data'), 1000)
      })
      setLoadingStatus(statusTypes.RESOLVED)
    }
    loadData()
  }, [])

  if (loadingStatus !== statusTypes.RESOLVED) {
    return <>Loading data...</>
  }
  return (
    <>
      <h2>{heading}</h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
