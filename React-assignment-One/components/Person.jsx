import PropTypes from 'prop-types';

export default function Person({name,age}) {
  return (
    <p>My name is {name} and I am {age} years old. </p>
  )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  