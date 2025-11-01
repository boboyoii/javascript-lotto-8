import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class Validator {
  validatePurchaseAmount(amount) {
    if (this.hasEmptyValue(amount))
      throw new Error(ERROR_MESSAGES.PURCHASE.EMPTY_VALUE);

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

    if (numbers.some((num) => this.hasEmptyValue(num)))
      throw new Error(ERROR_MESSAGES.WINNING.HAS_EMPTY_VALUE);

    if (numbers.some((num) => this.isNotNumber(num)))
      throw new Error(ERROR_MESSAGES.WINNING.HAS_NON_NUMBER);

    if (numbers.some((num) => this.isOutOfRange(num)))
      throw new Error(ERROR_MESSAGES.WINNING.OUT_OF_RANGE);
  }

  validateBonusNumber(number) {
    if (this.hasEmptyValue(number))
      throw new Error(ERROR_MESSAGES.BONUS.EMPTY_VALUE);

    if (this.isNotNumber(number))
      throw new Error(ERROR_MESSAGES.BONUS.NOT_NUMBER);

    if (this.isOutOfRange(number))
      throw new Error(ERROR_MESSAGES.BONUS.OUT_OF_RANGE);
  }

  hasEmptyValue(value) {
    return value == null || value.trim() === '';
  }

  isNotNumber(value) {
    return Number.isNaN(Number(value));
  }

  isNotPositive(value) {
    return Number(value) <= 0;
  }

  isNotThousandUnit(value) {
    return Number(value) % 1000 !== 0;
  }

  isNotSixCount(values) {
    return values.length !== 6;
  }

  isOutOfRange(value) {
    const num = Number(value);
    return num < 1 || num > 45;
  }
}

const validator = new Validator();
export default validator;
