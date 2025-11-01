import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import validator from '../utils/Validator.js';

class Parser {
  parsePurchaseAmount(input) {
    if (validator.hasEmptyValue(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    }
    return Number(input);
  }

  parseWinningNumber(input) {
    if (validator.hasEmptyValue(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    }

    const numbers = input.split(',');
    if (numbers.some((num) => validator.hasEmptyValue(num))) {
      throw new Error(ERROR_MESSAGES.WINNING.HAS_EMPTY_VALUE);
    }

    return numbers.map(Number);
  }

  parseBonusNumber(input) {
    if (validator.hasEmptyValue(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    }
    return Number(input);
  }
}

const parser = new Parser();
export default parser;
