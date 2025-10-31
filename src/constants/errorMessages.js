export const ERROR_MESSAGES = Object.freeze({
  PURCHASE: Object.freeze({
    NOT_NUMBER: '구입 금액은 숫자로 입력해야 합니다.',
    NOT_POSITIVE: '구입 금액은 0보다 커야 합니다.',
    NOT_THOUSAND_UNIT: '구입 금액은 1,000원 단위여야 합니다.',
  }),

  WINNING: Object.freeze({
    INVALID_COUNT: '당첨 번호는 6개여야 합니다.',
    HAS_EMPTY_VALUE: '당첨 번호에 비어 있는 값이 있습니다.',
    HAS_NON_NUMBER: '당첨 번호에는 숫자가 아닌 값이 포함되어 있습니다.',
    OUT_OF_RANGE: '당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
  }),

  BONUS: Object.freeze({
    EMPTY_VALUE: '보너스 번호를 입력해야 합니다.',
    NOT_NUMBER: '보너스 번호는 숫자로 입력해야 합니다.',
    OUT_OF_RANGE: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  }),
});
