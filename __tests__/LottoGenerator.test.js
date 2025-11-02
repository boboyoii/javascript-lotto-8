import LottoGenerator from '../src/service/LottoGenerator.js';
import Lotto from '../src/model/Lotto.js';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: { pickUniqueNumbersInRange: jest.fn() },
}));

describe('LottoGenerator 테스트', () => {
  let generator;

  beforeEach(() => {
    generator = new LottoGenerator();
  });

  test('1000원당 1장의 로또를 생성한다', () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const lottos = generator.generateLottos(3000);
    expect(lottos).toHaveLength(3);
  });

  test('생성된 객체는 Lotto 인스턴스여야 한다', () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const [lotto] = generator.generateLottos(1000);
    expect(lotto).toBeInstanceOf(Lotto);
  });
});
