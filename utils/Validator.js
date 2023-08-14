import ERROR_MESSAGE from './ErrorMessage.js';
import CONSTANTS from './Constants.js';

const Validator = {
  validateNames(names) {
    if (names.some((name) => name.length > CONSTANTS.validLength)) {
      alert(ERROR_MESSAGE.invalidName);
      return false;
    }
    return true;
  },
};

export default Validator;
