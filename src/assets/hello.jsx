const Hello = ({name, massage})=>{
    console.log(name, massage);
    return (
      <div>
        <h1>{name} {massage}</h1>
      </div>
    );
};

  import PropTypes from 'prop-types';
  Hello.propTypes = {
    name: PropTypes.string.isRequired,
    massage: PropTypes.string
  }
//   Hello.defaultProps = {
//     name: "Guest", 
//     massage: "Good morning"
//   }
  export default Hello