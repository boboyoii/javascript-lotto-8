import { Console } from '@woowacourse/mission-utils';
import parser from '../utils/Parser.js';

class LottoManager {
  constructor(input, output, generator, resultAnalyzer) {
    this.input = input;
    this.output = output;
    this.generator = generator;
    this.resultAnalyzer = resultAnalyzer;
  }

  async play() {
    const lottos = await this.purchaseLottos();
    const { winningNumbers, bonusNumber } = await this.inputWinningSet();
    this.showResult(lottos, winningNumbers, bonusNumber);
  }

  async purchaseLottos() {
    const amount = await this.readWithRetry(
      () => this.input.inputPurchaseAmount(),
      (amountInput) => parser.parsePurchaseAmount(amountInput)
    );

    const lottos = this.generator.generateLottos(amount);

    this.output.showPurchasedLottos(lottos);
    return lottos;
  }

  async inputWinningSet() {
    const winningNumbers = await this.readWithRetry(
      () => this.input.inputWinningNumbers(),
      (winningNumbersInput) => parser.parseWinningNumbers(winningNumbersInput)
    );

    const bonusNumber = await this.readWithRetry(
      () => this.input.inputBonusNumber(),
      (bonusNumberInput) =>
        parser.parseBonusNumber(bonusNumberInput, winningNumbers)
    );

    return { winningNumbers, bonusNumber };
  }

  showResult(lottos, winningNumbers, bonusNumber) {
    const result = this.resultAnalyzer.analyzeLottoResult(
      lottos,
      winningNumbers,
      bonusNumber
    );

    this.output.showWinningStats(result);
  }

  async readWithRetry(readFn, parseFn) {
    while (true) {
      try {
        const input = await readFn();
        return parseFn(input);
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default LottoManager;
