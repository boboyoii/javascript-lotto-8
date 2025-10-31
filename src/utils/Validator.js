class Validator {
  hasEmptyValue(value) {
    return value.trim() === '' || value == null;
  }

  isNotNumber(value) {
    return Number.isNaN(value);
  }

  isNotPositive(value) {
    return Number(value) <= 0;
  }

  isNotThousandUnit(value) {
    return Number(value) % 1000 !== 0;
  }

  validatePurchaseAmount(value) {
    if (this.hasEmptyValue(value))
      throw new Error(ERROR_MESSAGES.PURCHASE.EMPTY_VALUE);

    if (this.isNotNumber(value))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_NUMBER);

    if (this.isNotPositive(value))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_POSITIVE);

    if (this.isNotThousandUnit(value))
      throw new Error(ERROR_MESSAGES.PURCHASE.NOT_THOUSAND_UNIT);
  }
}

const validator = new Validator();
export default validator;
