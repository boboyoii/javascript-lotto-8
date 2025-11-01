import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class Validator {
  validatePurchaseAmount(amount) {
    if (this.isNotNumber(amount))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_NUMBER);

    if (this.isNotPositive(amount))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_POSITIVE);

    if (this.isNotThousandUnit(amount))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_THOUSAND_UNIT);
  }

  validateWinningNumbers(numbers) {
    if (this.isNotSixCount(numbers))
      throw new Error(ERROR_MESSAGES.WINNING.INVALID_COUNT);

    if (numbers.some((num) => this.isNotNumber(num)))
      throw new Error(ERROR_MESSAGES.WINNING.HAS_NON_NUMBER);

    if (numbers.some((num) => this.isOutOfRange(num)))
      throw new Error(ERROR_MESSAGES.WINNING.OUT_OF_RANGE);

    if (this.hasDuplicate(numbers))
      throw new Error(ERROR_MESSAGES.WINNING.HAS_DUPLICATE);
  }

  validateBonusNumber(number, winningNumbers) {
    if (this.isNotNumber(number))
      throw new Error(ERROR_MESSAGES.BONUS.NOT_NUMBER);

    if (this.isOutOfRange(number))
      throw new Error(ERROR_MESSAGES.BONUS.OUT_OF_RANGE);

    if (this.isDuplicateWithWinning(number, winningNumbers))
      throw new Error(ERROR_MESSAGES.BONUS.DUPLICATE_WITH_WINNING);
  }

  hasEmptyValue(value) {
    return value == null || value.trim() === '';
  }

  isNotNumber(value) {
    return Number.isNaN(value);
  }

  isNotPositive(value) {
    return value <= 0;
  }

  isNotThousandUnit(value) {
    return value % 1000 !== 0;
  }

  isNotSixCount(values) {
    return values.length !== 6;
  }

  isOutOfRange(value) {
    return value < 1 || value > 45;
  }

  hasDuplicate(values) {
    return new Set(values).size !== values.length;
  }

  isDuplicateWithWinning(number, winningNumbers) {
    return winningNumbers.includes(number);
  }
}

const validator = new Validator();
export default validator;
