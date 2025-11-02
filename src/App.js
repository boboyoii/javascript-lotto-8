import LottoManager from './controller/LottoManager.js';
import LottoGenerator from './service/LottoGenerator.js';
import LottoResultAnalyzer from './service/LottoResultAnalyzer.js';
import InputView from './View/InputView.js';
import OuputView from './View/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OuputView();
    const lottoGenerator = new LottoGenerator();
    const lottoResultAnalyzer = new LottoResultAnalyzer();
    const lottoManager = new LottoManager(
      inputView,
      outputView,
      lottoGenerator,
      lottoResultAnalyzer
    );
    lottoManager.run();
  }
}

export default App;
