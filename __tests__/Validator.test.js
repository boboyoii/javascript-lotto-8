import validator from '../src/utils/Validator.js';
import { ERROR_MESSAGES } from '../src/constants/errorMessages.js';

describe('구입 금액 검증', () => {
  test('숫자가 아니면 예외 발생', () => {
    expect(() => validator.validatePurchaseAmount('abc')).toThrow(
      ERROR_MESSAGES.PURCHASE.NOT_NUMBER
    );
  });

  test('0 이하이면 예외 발생', () => {
    expect(() => validator.validatePurchaseAmount('0')).toThrow(
      ERROR_MESSAGES.PURCHASE.NOT_POSITIVE
    );
  });

  test('1000원 단위가 아니면 예외 발생', () => {
    expect(() => validator.validatePurchaseAmount('1500')).toThrow(
      ERROR_MESSAGES.PURCHASE.NOT_THOUSAND_UNIT
    );
  });

  test('정상 값이면 통과', () => {
    expect(() => validator.validatePurchaseAmount('3000')).not.toThrow();
  });
});

describe('당첨 번호 검증', () => {
  test('입력한 번호가 6개가 아니면 예외 발생', () => {
    expect(() =>
      validator.validateWinningNumber(['1', '2', '3', '4', '5'])
    ).toThrow(ERROR_MESSAGES.WINNING.INVALID_COUNT);
  });

  test('비어 있는 값이 있으면 예외 발생', () => {
    expect(() =>
      validator.validateWinningNumber(['1', '2', '', '4', '5', '6'])
    ).toThrow(ERROR_MESSAGES.WINNING.HAS_EMPTY_VALUE);
  });

  test('숫자가 아닌 값이 있으면 예외 발생', () => {
    expect(() =>
      validator.validateWinningNumber(['1', '2', 'a', '4', '5', '6'])
    ).toThrow(ERROR_MESSAGES.WINNING.HAS_NON_NUMBER);
  });

  test('범위를 벗어난 숫자가 있으면 예외 발생', () => {
    expect(() =>
      validator.validateWinningNumber(['1', '2', '3', '4', '5', '46'])
    ).toThrow(ERROR_MESSAGES.WINNING.OUT_OF_RANGE);
  });

  test('정상 입력이면 통과', () => {
    expect(() =>
      validator.validateWinningNumber(['1', '2', '3', '4', '5', '6'])
    ).not.toThrow();
  });
});

describe('보너스 번호 검증', () => {
  test('값이 비어 있으면 예외 발생', () => {
    expect(() => validator.validateBonusNumber('')).toThrow(
      ERROR_MESSAGES.BONUS.EMPTY_VALUE
    );
  });

  test('숫자가 아니면 예외 발생', () => {
    expect(() => validator.validateBonusNumber('a')).toThrow(
      ERROR_MESSAGES.BONUS.NOT_NUMBER
    );
  });

  test('1~45 범위를 벗어나면 예외 발생', () => {
    expect(() => validator.validateBonusNumber('50')).toThrow(
      ERROR_MESSAGES.BONUS.OUT_OF_RANGE
    );
  });

  test('정상 입력이면 통과', () => {
    expect(() => validator.validateBonusNumber('10')).not.toThrow();
  });
});
