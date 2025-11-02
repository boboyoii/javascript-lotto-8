import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import validator from '../utils/Validator.js';

class Parser {
  parsePurchaseAmount(input) {
    this.validateEmptyInput(input);

    const amount = Number(input);
    validator.validatePurchaseAmount(amount);

    return amount;
  }

  parseWinningNumbers(input) {
    this.validateEmptyInput(input);

    const tokens = input.split(',');
    if (tokens.some((token) => validator.hasEmptyValue(token))) {
      throw new Error(ERROR_MESSAGES.WINNING.HAS_EMPTY_VALUE);
    }

    const winningNumbers = tokens.map(Number);
    validator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  parseBonusNumber(input, winningNumbers) {
    this.validateEmptyInput(input);

    const bonusNumber = Number(input);
    validator.validateBonusNumber(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  validateEmptyInput(input) {
    if (validator.hasEmptyValue(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    }
  }
}

const parser = new Parser();
export default parser;
