import Lotto from '../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 일치하는 숫자의 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];

    const matchCount = lotto.getMatchCount(winningNumbers);

    expect(matchCount).toBe(3);
  });

  test('보너스 번호가 로또 번호에 포함되어 있으면 true를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 5;

    const result = lotto.hasBonus(bonusNumber);

    expect(result).toBe(true);
  });

  test('보너스 번호가 로또 번호에 포함되어 있지 않으면 false를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 10;

    const result = lotto.hasBonus(bonusNumber);

    expect(result).toBe(false);
  });
});
