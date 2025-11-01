import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import validator from '../utils/Validator.js';

class Parser {
  parsePurchaseAmount(input) {
    if (validator.hasEmptyValue(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    }
    const amount = Number(input);
    return amount;
  }
}

const parser = new Parser();
export default parser;
