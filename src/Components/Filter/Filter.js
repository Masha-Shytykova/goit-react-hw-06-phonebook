import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

/////////////////redux
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';
// import PropTypes from 'prop-types';

// const Filter = ({ value, onChange }) => {
//   return (
//     <div>
//       <label>
//         Find contacts by name
//         <input type="text" name="filter" value={value} onChange={onChange} />
//       </label>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
