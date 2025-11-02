import { LOTTO_REWARD } from './LottoConstants.js';

export const INPUT_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  WINNINT_STATS_HEADER: '\n당첨 통계\n---',
});

export const OUTPUT_TEMPLATES = Object.freeze({
  PURCHASE_HEADER: (count) => `\n${count}개를 구매했습니다.\n`,

  RANK_RESULT: {
    FIFTH: (count) =>
      `3개 일치 (${LOTTO_REWARD.FIFTH.toLocaleString()}원) - ${count}개`,
    FOURTH: (count) =>
      `4개 일치 (${LOTTO_REWARD.FOURTH.toLocaleString()}원) - ${count}개`,
    THIRD: (count) =>
      `5개 일치 (${LOTTO_REWARD.THIRD.toLocaleString()}원) - ${count}개`,
    SECOND: (count) =>
      `5개 일치, 보너스 볼 일치 (${LOTTO_REWARD.SECOND.toLocaleString()}원) - ${count}개`,
    FIRST: (count) =>
      `6개 일치 (${LOTTO_REWARD.FIRST.toLocaleString()}원) - ${count}개`,
  },

  PROFIT_RATE: (rate) => `총 수익률은 ${rate.toLocaleString()}%입니다.`,
});
