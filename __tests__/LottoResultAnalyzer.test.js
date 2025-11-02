import LottoResultAnalyzer from '../src/service/LottoResultAnalyzer.js';

const makeLotto = (matchCount, hasBonus) => ({
  getMatchCount: () => matchCount,
  hasBonus: () => hasBonus,
});

describe('LottoResultAnalyzer', () => {
  const analyzer = new LottoResultAnalyzer();
  const dummyWinning = [1, 2, 3, 4, 5, 6];
  const dummyBonus = 7;

  test('등수가 제대로 계산되는지 확인한다.', () => {
    const lottos = [
      makeLotto(6, false), // FIRST
      makeLotto(5, true), // SECOND
      makeLotto(5, false), // THIRD
      makeLotto(4, false), // FOURTH
      makeLotto(3, false), // FIFTH
      makeLotto(2, false),
    ];

    const result = analyzer.analyzeLottoResult(
      lottos,
      dummyWinning,
      dummyBonus
    );
    const counts = result.getCountsByRank();

    expect(counts.FIRST).toBe(1);
    expect(counts.SECOND).toBe(1);
    expect(counts.THIRD).toBe(1);
    expect(counts.FOURTH).toBe(1);
    expect(counts.FIFTH).toBe(1);
  });

  test('보너스 번호에 따라 2등과 3등이 잘 나뉘는지 확인한다', () => {
    const lottos = [
      makeLotto(5, true), // SECOND
      makeLotto(5, false), // THIRD
      makeLotto(5, true), // SECOND
    ];

    const result = analyzer.analyzeLottoResult(
      lottos,
      dummyWinning,
      dummyBonus
    );
    const counts = result.getCountsByRank();

    expect(counts.SECOND).toBe(2);
    expect(counts.THIRD).toBe(1);
    expect(counts.FIRST).toBe(0);
    expect(counts.FOURTH).toBe(0);
    expect(counts.FIFTH).toBe(0);
  });

  test('수익률을 올바르게 계산하고 소수점 한 자리로 반올림한다.', () => {
    const lottos = [
      makeLotto(3, false), // FIFTH (5,000)
      makeLotto(0, false),
    ];

    const result = analyzer.analyzeLottoResult(
      lottos,
      dummyWinning,
      dummyBonus
    );

    expect(result.getProfitRate()).toBe('250.0');
  });

  test('모든 티켓이 당첨 되지 않으면 수익률은 0.0%가 된다.', () => {
    const lottos = [
      makeLotto(0, false),
      makeLotto(1, false),
      makeLotto(2, true),
    ];

    const result = analyzer.analyzeLottoResult(
      lottos,
      dummyWinning,
      dummyBonus
    );
    const counts = result.getCountsByRank();

    expect(counts.FIRST).toBe(0);
    expect(counts.SECOND).toBe(0);
    expect(counts.THIRD).toBe(0);
    expect(counts.FOURTH).toBe(0);
    expect(counts.FIFTH).toBe(0);
    expect(result.getProfitRate()).toBe('0.0');
  });
});
