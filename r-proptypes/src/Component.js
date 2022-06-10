import PropTypes from 'prop-types';

const Component = ({name , age})=>{
  return `Hi I am ${name} and i have ${age +10} years`
}

Component.propTypes={
  name:PropTypes.string,
  age:PropTypes.number
}

export default Component;