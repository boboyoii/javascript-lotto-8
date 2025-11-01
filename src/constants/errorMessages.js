export const ERROR_MESSAGES = Object.freeze({
  PURCHASE: Object.freeze({
    EMPTY_VALUE: '[ERROR] 구입 금액을 입력해야 합니다.',
    NOT_NUMBER: '[ERROR] 구입 금액은 숫자로 입력해야 합니다.',
    NOT_POSITIVE: '[ERROR] 구입 금액은 0보다 커야 합니다.',
    NOT_THOUSAND_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  }),

  WINNING: Object.freeze({
    INVALID_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',
    HAS_EMPTY_VALUE: '[ERROR] 당첨 번호에 비어 있는 값이 있습니다.',
    HAS_NON_NUMBER: '[ERROR] 당첨 번호에는 숫자가 아닌 값이 포함되어 있습니다.',
    OUT_OF_RANGE: '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
    HAS_DUPLICATE: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.',
  }),

  BONUS: Object.freeze({
    EMPTY_VALUE: '[ERROR] 보너스 번호를 입력해야 합니다.',
    NOT_NUMBER: '[ERROR] 보너스 번호는 숫자로 입력해야 합니다.',
    OUT_OF_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE_WITH_WINNING:
      '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  }),
});
