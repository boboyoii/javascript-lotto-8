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
    const { winningNumbers, bonusNumber } = await this.pickWinningNumbers();
    this.showResult(lottos, winningNumbers, bonusNumber);
  }

  async purchaseLottos() {
    const amountInput = await this.input.inputPurchaseAmount();
    const amount = parser.parsePurchaseAmount(amountInput);

    const lottos = this.generator.generateLottos(amount);

    this.output.showPurchasedLottos(lottos);
    return lottos;
  }

  async pickWinningNumbers() {
    const winningNumbersInput = await this.input.inputWinningNumbers();
    const winningNumbers = parser.parseWinningNumbers(winningNumbersInput);

    const bonusNumberInput = await this.input.inputBonusNumber();
    const bonusNumber = parser.parseBonusNumber(
      bonusNumberInput,
      winningNumbers
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
}

export default LottoManager;
