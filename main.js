// Array to store trade data
let trades = [];
let equityHistory = [];

// DOM elements
const appMainTitle = document.getElementById('app-main-title'); // Reference to main app title
const appDocumentTitle = document.getElementById('app-document-title'); // Reference to document title
const tradePairSelect = document.getElementById('trade-pair');
const tradeActionRadios = document.querySelectorAll('input[name="trade-action"]');
const tradeOpenDateInput = document.getElementById('trade-open-date');
const tradeCloseDateInput = document.getElementById('trade-close-date');
const tradeEntryInput = document.getElementById('trade-entry');
const tradeSlInput = document.getElementById('trade-sl');
const tradeTpInput = document.getElementById('trade-tp');
const tradeOutcomeRadios = document.querySelectorAll('input[name="trade-outcome"]');
const addTradeBtn = document.getElementById('add-trade-btn');
const tradeTableBody = document.getElementById('trade-table-body');
const initialCapitalInput = document.getElementById('initial-capital');
const lotSizeInput = document.getElementById('lot-size');
const equityChartCanvas = document.getElementById('equity-chart');
const notificationBox = document.getElementById('notification-box');
const importCsvFile = document.getElementById('import-csv-file');
const importCsvBtn = document.getElementById('import-csv-btn');
const exportCsvBtn = document.getElementById('export-csv-btn');
const resetDataBtn = document.getElementById('reset-data-btn');
// Removed exportPdfBtn reference

// Navigation elements
const navDataEntryBtn = document.getElementById('nav-data-entry');
const navStatisticsBtn = document.getElementById('nav-statistics');
const pageDataEntry = document.getElementById('page-data-entry');
const pageStatistics = document.getElementById('page-statistics');


// Statistics display elements
const statWinRate = document.getElementById('stat-win-rate');
const statTotalProfitPips = document.getElementById('stat-total-profit-pips');
const statTotalLossPips = document.getElementById('stat-total-loss-pips');
const statTotalProfitNominal = document.getElementById('stat-total-profit-nominal');
const statTotalLossNominal = document.getElementById('stat-total-loss-nominal');
const statCapitalGrowthPercent = document.getElementById('stat-capital-growth-percent');
const statProbability = document.getElementById('stat-probability');
const statAvgProfitPips = document.getElementById('stat-avg-profit-pips');
const statAvgLossPips = document.getElementById('stat-avg-loss-pips');
const statAvgRR = document.getElementById('stat-avg-rr');
const statMaxDrawdown = document.getElementById('stat-max-drawdown');
const statMaxConsecutiveLoss = document.getElementById('stat-max-consecutive-loss');
const statMaxConsecutiveProfit = document.getElementById('stat-max-consecutive-profit');
const statMaxLossPips = document.getElementById('stat-max-loss-pips');
const statMaxTpPips = document.getElementById('stat-max-tp-pips');
const statAvgHoldingPeriod = document.getElementById('stat-avg-holding-period');
const pipsSummaryTableBody = document.getElementById('pips-summary-table-body');
const totalOverallPips = document.getElementById('total-overall-pips');

// Language elements
const languageSelect = document.getElementById('language-select');
const elementsToTranslate = {
    'app-main-title': { // Main app title
        'en': 'Trading Strategy Backtest App',
        'jp': 'トレード戦略バックテストアプリ'
    },
    'app-document-title': { // Document title (for browser tab)
        'en': 'Trading Strategy Backtest',
        'jp': 'トレード戦略バックテスト'
    },
    'label-language': {
        'en': 'Language:',
        'jp': '言語:'
    },
    'title-add-trade': {
        'en': 'Add New Trade',
        'jp': '新規トレードを追加'
    },
    'label-pair': {
        'en': 'Pair',
        'jp': '通貨ペア'
    },
    'label-action': {
        'en': 'Action',
        'jp': 'アクション'
    },
    'label-buy': {
        'en': 'Buy',
        'jp': '買い'
    },
    'label-sell': {
        'en': 'Sell',
        'jp': '売り'
    },
    'label-open-date': {
        'en': 'Open Date',
        'jp': 'オープン日'
    },
    'label-close-date': {
        'en': 'Close Date',
        'jp': 'クローズ日'
    },
    'label-entry-price': {
        'en': 'Entry Price',
        'jp': 'エントリー価格'
    },
    'label-sl-price': {
        'en': 'SL Price',
        'jp': 'SL価格'
    },
    'label-tp-price': {
        'en': 'TP Price',
        'jp': 'TP価格'
    },
    'label-outcome': {
        'en': 'Outcome',
        'jp': '結果'
    },
    'outcome-tp-label': {
        'en': 'TP',
        'jp': '利確'
    },
    'outcome-sl-label': {
        'en': 'SL',
        'jp': '損切り'
    },
    'btn-add-trade': {
        'en': 'Add Trade',
        'jp': 'トレード追加'
    },
    'btn-import-csv': {
        'en': 'Import from CSV',
        'jp': 'CSVからインポート'
    },
    'btn-export-csv': {
        'en': 'Export to CSV',
        'jp': 'CSVにエクスポート'
    },
    'btn-reset-data': {
        'en': 'Reset Data',
        'jp': 'データリセット'
    },
    // Removed btn-export-pdf
    'title-trade-list': {
        'en': 'Trade List',
        'jp': 'トレードリスト'
    },
    'th-pair': {
        'en': 'Pair',
        'jp': '通貨ペア'
    },
    'th-action': {
        'en': 'Action',
        'jp': 'アクション'
    },
    'th-open-date': {
        'en': 'Open Date',
        'jp': 'オープン日'
    },
    'th-close-date': {
        'en': 'Close Date',
        'jp': 'クローズ日'
    },
    'th-entry-price': {
        'en': 'Entry',
        'jp': 'エントリー'
    },
    'th-sl-price': {
        'en': 'SL',
        'jp': '損切り'
    },
    'th-tp-price': {
        'en': 'TP',
        'jp': '利確'
    },
    'th-pips': {
        'en': 'Pips',
        'jp': 'ピップス'
    },
    'th-outcome': {
        'en': 'Outcome',
        'jp': '結果'
    },
    'th-holding-period': {
        'en': 'Holding Period (days)',
        'jp': '保有期間 (日)'
    },
    'th-actions': {
        'en': 'Actions',
        'jp': '操作'
    },
    'title-simulation-stats': {
        'en': 'Simulation & Statistics',
        'jp': 'シミュレーションと統計'
    },
    'label-initial-capital': {
        'en': 'Initial Capital ($)',
        'jp': '初期資金 ($)'
    },
    'label-lot-size': {
        'en': 'Lot Size (standard lot)',
        'jp': 'ロットサイズ (標準ロット)'
    },
    'title-equity-growth-chart': {
        'en': 'Equity Growth Chart',
        'jp': '資金成長グラフ'
    },
    'title-key-stats': {
        'en': 'Key Statistics',
        'jp': '主要統計'
    },
    'stat-win-rate-label': {
        'en': 'Win Rate:',
        'jp': '勝率:'
    },
    'stat-total-profit-pips-label': {
        'en': 'Total Profit (Pips):',
        'jp': '合計利益 (ピップス):'
    },
    'stat-total-loss-pips-label': {
        'en': 'Total Loss (Pips):',
        'jp': '合計損失 (ピップス):'
    },
    'stat-total-profit-nominal-label': {
        'en': 'Total Profit (Nominal):',
        'jp': '合計利益 (名目):'
    },
    'stat-total-loss-nominal-label': {
        'en': 'Total Loss (Nominal):',
        'jp': '合計損失 (名目):'
    },
    'stat-capital-growth-percent-label': {
        'en': 'Capital Growth (%):',
        'jp': '資金成長率 (%):'
    },
    'stat-probability-label': {
        'en': 'Probability (%):'
    },
    'stat-avg-profit-pips-label': {
        'en': 'Average Profit (Pips):',
        'jp': '平均利益 (ピップス):'
    },
    'stat-avg-loss-pips-label': {
        'en': 'Average Loss (Pips):',
        'jp': '平均損失 (ピップス):'
    },
    'stat-avg-rr-label': {
        'en': 'Average Risk/Reward:',
        'jp': '平均リスク/リワード:'
    },
    'stat-max-drawdown-label': {
        'en': 'Max Drawdown (%):',
        'jp': '最大ドローダウン (%):'
    },
    'stat-max-consecutive-loss-label': {
        'en': 'Max Consecutive Loss:',
        'jp': '最大連続損失:'
    },
    'stat-max-consecutive-profit-label': {
        'en': 'Max Consecutive Profit:',
        'jp': '最大連続利益:'
    },
    'stat-max-loss-pips-label': {
        'en': 'Max Loss (Pips):',
        'jp': '最大損失 (ピップス):'
    },
    'stat-max-tp-pips-label': {
        'en': 'Max TP (Pips):',
        'jp': '最大TP (ピップス):'
    },
    'stat-avg-holding-period-label': {
        'en': 'Avg. Holding Period (days):',
        'jp': '平均保有期間 (日):'
    },
    'title-pips-summary': {
        'en': 'Pips Summary',
        'jp': 'ピップス概要'
    },
    'th-year': {
        'en': 'Year',
        'jp': '年'
    },
    'th-jan': {
        'en': 'Jan', 'jp': '1月'
    },
    'th-feb': {
        'en': 'Feb', 'jp': '2月'
    },
    'th-mar': {
        'en': 'Mar', 'jp': '3月'
    },
    'th-apr': {
        'en': 'Apr', 'jp': '4月'
    },
    'th-may': {
        'en': 'May', 'jp': '5月'
    },
    'th-jun': {
        'en': 'Jun', 'jp': '6月'
    },
    'th-jul': {
        'en': 'Jul', 'jp': '7月'
    },
    'th-aug': {
        'en': 'Aug',
        'jp': '8月'
    },
    'th-sep': {
        'en': 'Sep',
        'jp': '9月'
    },
    'th-oct': {
        'en': 'Oct',
        'jp': '10月'
    },
    'th-nov': {
        'en': 'Nov',
        'jp': '11月'
    },
    'th-dec': {
        'en': 'Dec',
        'jp': '12月'
    },
    'th-total-year': {
        'en': 'Total Year',
        'jp': '年間合計'
    },
    'th-total-overall': {
        'en': 'Total Overall Pips:',
        'jp': '全体合計ピップス:'
    },
    // Outcomes for trade table
    'outcome-sl': {
        'en': 'SL',
        'jp': '損切り'
    },
    'outcome-tp': {
        'en': 'TP',
        'jp': '利確'
    },
    'outcome-unknown': {
        'en': 'N/A',
        'jp': '不明'
    },
    // Confirmation messages and general notifications
    'confirm-delete-trade': {
        'en': 'Are you sure you want to delete this trade?',
        'jp': 'このトレードを削除してもよろしいですか？'
    },
    'confirm-delete-yes': {
        'en': 'Yes',
        'jp': 'はい'
    },
    'confirm-delete-no': {
        'en': 'No',
        'jp': 'いいえ'
    },
    'confirm-reset-data': {
        'en': 'Are you sure you want to delete ALL trade data? This action cannot be undone.',
        'jp': 'すべてのトレードデータを削除してもよろしいですか？この操作は元に戻せません。'
    },
    'confirm-reset-yes': {
        'en': 'Yes, Delete All',
        'jp': 'はい、すべて削除'
    },
    'confirm-reset-no': {
        'en': 'No, Cancel',
        'jp': 'いいえ、キャンセル'
    },
    // Navigation labels
    'nav-data-entry-label': {
        'en': 'Data Entry',
        'jp': 'データ入力'
    },
    'nav-statistics-label': {
        'en': 'Simulation & Statistics',
        'jp': 'シミュレーションと統計'
    },
    // New notification messages (added for translation)
    'validation-fill-all-fields': {
        'en': 'Please fill in all trade fields correctly (dates, entry, SL, TP).',
        'jp': 'すべてのトレードフィールド（日付、エントリー、SL、TP）を正しく入力してください。'
    },
    'validation-close-date-earlier': {
        'en': 'Close date cannot be earlier than open date.',
        'jp': 'クローズ日はオープン日より早くすることはできません。'
    },
    'validation-buy-sl': {
        'en': 'For Buy, SL Price must be LOWER than Entry Price.',
        'jp': '買いの場合、SL価格はエントリー価格より低くなければなりません。'
    },
    'validation-buy-tp': {
        'en': 'For Buy, TP Price must be HIGHER than Entry Price.',
        'jp': '買いの場合、TP価格はエントリー価格より高くなければなりません。'
    },
    'validation-sell-sl': {
        'en': 'For Sell, SL Price must be HIGHER than Entry Price.',
        'jp': '売りの場合、SL価格はエントリー価格より高くなければなりません。'
    },
    'validation-sell-tp': {
        'en': 'For Sell, TP Price must be LOWER than Entry Price.',
        'jp': '売りの場合、TP価格はエントリー価格より低くなければなりません。'
    },
    'trade-added-success': {
        'en': 'Trade added successfully!',
        'jp': 'トレードが正常に追加されました！'
    },
    'trade-deleted-success': {
        'en': 'Trade deleted successfully!',
        'jp': 'トレードが正常に削除されました！'
    },
    'data-reset-success': {
        'en': 'All trade data has been reset!',
        'jp': 'すべてのトレードデータがリセットされました！'
    },
    'no-chart-data-message': {
        'en': 'No trade data to display chart.',
        'jp': 'チャートを表示するトレードデータがありません。'
    },
    'no-data-to-export': {
        'en': 'No trade data to export.',
        'jp': 'エクスポートするトレードデータがありません。'
    },
    'data-exported-success': {
        'en': 'Data exported successfully to CSV!',
        'jp': 'データがCSVに正常にエクスポートされました！'
    },
    'browser-no-csv-support': {
        'en': 'Your browser does not support CSV export.',
        'jp': 'お使いのブラウザはCSVエクスポートをサポートしていません。'
    },
    'csv-empty-invalid': {
        'en': 'CSV file is empty or invalid.',
        'jp': 'CSVファイルが空であるか無効です。'
    },
    'csv-missing-headers': {
        'en': 'CSV is missing required headers: {headers}.',
        'jp': 'CSVに必要なヘッダーがありません: {headers}。'
    },
    'csv-row-invalid-columns': {
        'en': 'Row {rowNum} is invalid: Column count mismatch.',
        'jp': '行 {rowNum} は無効です：列数が一致しません。'
    },
    'csv-row-invalid-data': {
        'en': 'Row {rowNum} has invalid numerical or date data.',
        'jp': '行 {rowNum} に無効な数値または日付データがあります。'
    },
    'csv-row-close-date-earlier': {
        'en': 'Row {rowNum} has a close date earlier than open date.',
        'jp': '行 {rowNum} のクローズ日がオープン日より早いです。'
    },
    'csv-row-invalid-outcome': {
        'en': 'Row {rowNum}: Invalid trade outcome ({outcome}). Assumed N/A.',
        'jp': '行 {rowNum}：無効なトレード結果（{outcome}）。N/Aと見なされます。'
    },
    'trades-imported-success': {
        'en': '{count} trades imported successfully!',
        'jp': '{count} 件のトレードが正常にインポートされました！'
    },
    'no-valid-trades-in-csv': {
        'en': 'No valid trades found in CSV file.',
        'jp': 'CSVファイルに有効なトレードが見つかりませんでした。'
    },
    'error-saving-local-storage': {
        'en': 'Failed to save data to local storage.',
        'jp': 'ローカルストレージへのデータ保存に失敗しました。'
    },
    'data-loaded-success': {
        'en': 'Trade data loaded from local storage.',
        'jp': 'トレードデータがローカルストレージからロードされました。'
    },
    'error-loading-local-storage': {
        'en': 'Failed to load data from local storage.',
        'jp': 'ローカルストレージからのデータロードに失敗しました。'
    },
    'dummy-data-loaded': {
        'en': 'Dummy data loaded!',
        'jp': 'ダミーデータがロードされました！'
    },
    'btn-delete-trade': { // Translate delete button in table specifically
        'en': 'Delete',
        'jp': '削除'
    }
    // Removed PDF export specific messages
};

// Pip values per 1 standard lot (100,000 units)
// For JPY pairs, 1 pip = 0.01. For others, 1 pip = 0.0001.
// Assuming $10 per pip for non-JPY majors and $10 for XAUUSD (approximately)
// For JPY pairs, it's roughly $10 per 100 pips of 0.01 movement for 1 standard lot, so 1 pip movement (0.01) is $10.
// This simplification is for demonstration; actual pip value depends on cross-currency and account currency.
const pipValues = {
    'XAUUSD': 10,    // For XAUUSD, 1 pip = 0.10 price movement (e.g., 1900.00 to 1900.10). A $1.00 move is 10 pips.
    'EURUSD': 10, // 1 pip = 0.0001, $10 per 0.0001 for 1 standard lot
    'GBPUSD': 10,
    'AUDUSD': 10,
    'NZDUSD': 10,
    'USDCAD': 10,
    'USDCHF': 10,
    'USDJPY': 10,    // 1 pip is 0.01, value is $10 for 1 standard lot (100,000 units), so multiplier is 100
    'GBPJPY': 10,
    'EURJPY': 10,
    'AUDJPY': 10,
    'CHFJPY': 10,
    'CADJPY': 10,
    'NZDJPY': 10
};

// Decimal places for different pairs
const decimalPlaces = {
    'XAUUSD': 2,
    'EURUSD': 5,
    'GBPUSD': 5,
    'AUDUSD': 5,
    'NZDUSD': 5,
    'USDCAD': 5,
    'USDCHF': 5,
    'USDJPY': 3, // JPY pairs typically 2 decimal places for price, 3 for fractional pips (0.001)
    'GBPJPY': 3,
    'EURJPY': 3,
    'AUDJPY': 3,
    'CHFJPY': 3,
    'CADJPY': 3,
    'NZDJPY': 3
};

// Event listener for language selection
languageSelect.addEventListener('change', () => {
    setLanguage(languageSelect.value);
    renderTradeTable(); // Re-render to update outcome text and holding period
    calculateAndDisplayStatistics(); // Recalculate to update overall texts
});

// Function to set the current language
function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    // Update document title (browser tab)
    if (appDocumentTitle) {
        appDocumentTitle.textContent = elementsToTranslate['app-document-title'][lang];
    }

    // Translate all elements with IDs defined in elementsToTranslate
    for (const id in elementsToTranslate) {
        const element = document.getElementById(id);
        if (element) {
            // Check if translation exists for the current language
            if (elementsToTranslate[id] && elementsToTranslate[id][lang]) {
                element.textContent = elementsToTranslate[id][lang];
            } else {
                // Fallback to English if translation for current language is missing
                element.textContent = elementsToTranslate[id]['en'] || ''; // Fallback for safety
            }
        }
    }
}

// Initialize language on load (set default to English)
languageSelect.value = 'en'; // Set default value
setLanguage(languageSelect.value);


// Function to show a temporary notification message
function showNotification(message, isError = false) {
    notificationBox.textContent = message;
    notificationBox.classList.remove('error');
    if (isError) {
        notificationBox.classList.add('error');
    }
    notificationBox.style.display = 'block';
    setTimeout(() => {
        notificationBox.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}

// Adjust step attribute for price inputs based on selected pair
tradePairSelect.addEventListener('change', () => {
    const pair = tradePairSelect.value;
    // Determine the step value based on the decimal places for the pair
    const stepValue = 1 / Math.pow(10, decimalPlaces[pair] || 5); // Default to 5 decimal places if not specified
    tradeEntryInput.step = stepValue;
    tradeSlInput.step = stepValue;
    tradeTpInput.step = stepValue;
    // Optionally, clear inputs or adjust their values to fit new decimal places
    tradeEntryInput.value = parseFloat(tradeEntryInput.value).toFixed(decimalPlaces[pair] || 5);
    tradeSlInput.value = parseFloat(tradeSlInput.value).toFixed(decimalPlaces[pair] || 5);
    tradeTpInput.value = parseFloat(tradeTpInput.value).toFixed(decimalPlaces[pair] || 5);
});
// Initialize step on page load
tradePairSelect.dispatchEvent(new Event('change'));

// Function to calculate pips based on pair type
function calculatePips(pair, entry, exit) {
    let multiplier;
    if (pair.includes('JPY')) {
        multiplier = 100; // For JPY pairs, 1 pip = 0.01 price movement (e.g., 130.12 to 130.13)
    } else if (pair === 'XAUUSD') {
        multiplier = 10; // For XAUUSD, 1 pip = 0.10 price movement (e.g., 1900.00 to 1900.10). A $1.00 move is 10 pips.
    } else {
        multiplier = 10000; // For most other pairs, 1 pip = 0.0001 price movement (e.g., 1.23450 to 1.23460)
    }
    // Calculate raw pips, then round to 2 decimal places for display consistency
    return parseFloat(((exit - entry) * multiplier).toFixed(2));
}

// Function to calculate holding period in days
function calculateHoldingPeriod(openDateStr, closeDateStr) {
    const openDate = new Date(openDateStr);
    const closeDate = new Date(closeDateStr);
    const diffTime = Math.abs(closeDate - openDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Function to add a new trade
addTradeBtn.addEventListener('click', () => {
    const pair = tradePairSelect.value;
    const action = document.querySelector('input[name="trade-action"]:checked').value;
    const openDate = tradeOpenDateInput.value;
    const closeDate = tradeCloseDateInput.value;
    const entry = parseFloat(tradeEntryInput.value);
    const sl = parseFloat(tradeSlInput.value);
    const tp = parseFloat(tradeTpInput.value);
    const selectedOutcome = document.querySelector('input[name="trade-outcome"]:checked').value; // Get selected outcome

    if (!openDate || !closeDate || isNaN(entry) || isNaN(sl) || isNaN(tp)) {
        showNotification(elementsToTranslate['validation-fill-all-fields'][languageSelect.value], true);
        return;
    }
    if (new Date(closeDate) < new Date(openDate)) {
        showNotification(elementsToTranslate['validation-close-date-earlier'][languageSelect.value], true);
        return;
    }

    // Validation for SL/TP prices based on action
    if (action === 'buy') {
        if (sl >= entry) {
            showNotification(elementsToTranslate['validation-buy-sl'][languageSelect.value], true);
            return;
        }
        if (tp <= entry) {
            showNotification(elementsToTranslate['validation-buy-tp'][languageSelect.value], true);
            return;
        }
    } else { // action === 'sell'
        if (sl <= entry) {
            showNotification(elementsToTranslate['validation-sell-sl'][languageSelect.value], true);
            return;
        }
        if (tp >= entry) {
            showNotification(elementsToTranslate['validation-sell-tp'][languageSelect.value], true);
            return;
        }
    }

    let pips = 0;
    const pipValuePerLot = pipValues[pair] || 10; // Default to $10 if not found

    // Calculate pips based on manually selected outcome
    if (selectedOutcome === 'TP') {
        pips = calculatePips(pair, entry, tp);
        pips = Math.abs(pips); // Always positive for TP
    } else { // selectedOutcome === 'SL'
        pips = calculatePips(pair, entry, sl);
        pips = -Math.abs(pips); // Always negative for SL
    }


    const nominalProfitLoss = pips * (parseFloat(lotSizeInput.value) || 0.01) * pipValuePerLot;
    const holdingDays = calculateHoldingPeriod(openDate, closeDate);

    const newTrade = {
        id: Date.now(), // Unique ID
        pair,
        action,
        openDate,
        closeDate,
        entry,
        sl,
        tp,
        pips: parseFloat(pips.toFixed(2)),
        outcome: selectedOutcome, // Use the manually selected outcome
        nominalProfitLoss: parseFloat(nominalProfitLoss.toFixed(2)),
        holdingDays
    };

    trades.push(newTrade);
    trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate)); // Sort by date
    saveTrades(); // Save to local storage
    showNotification(elementsToTranslate['trade-added-success'][languageSelect.value]);
    clearTradeInputs();
    renderTradeTable();
    calculateAndDisplayStatistics();
});

// Function to clear trade input fields
function clearTradeInputs() {
    tradePairSelect.value = 'XAUUSD';
    document.querySelector('input[name="trade-action"][value="buy"]').checked = true;
    document.querySelector('input[name="trade-outcome"][value="TP"]').checked = true; // Reset outcome to TP
    tradeOpenDateInput.value = '';
    tradeCloseDateInput.value = '';
    tradeEntryInput.value = '';
    tradeSlInput.value = '';
    tradeTpInput.value = '';
    tradePairSelect.dispatchEvent(new Event('change')); // Reset step value
}

// Function to render the trade table
function renderTradeTable() {
    tradeTableBody.innerHTML = '';
    const currentLang = languageSelect.value;
    trades.forEach(trade => {
        const row = tradeTableBody.insertRow();
        row.insertCell().textContent = trade.pair;
        row.insertCell().textContent = trade.action.toUpperCase();
        row.insertCell().textContent = trade.openDate;
        row.insertCell().textContent = trade.closeDate;
        row.insertCell().textContent = trade.entry.toFixed(decimalPlaces[trade.pair] || 5);
        row.insertCell().textContent = trade.sl.toFixed(decimalPlaces[trade.pair] || 5);
        row.insertCell().textContent = trade.tp.toFixed(decimalPlaces[trade.pair] || 5);
        row.insertCell().textContent = trade.pips.toFixed(2);
        // Display localized outcome
        row.insertCell().textContent = elementsToTranslate[`outcome-${trade.outcome.toLowerCase()}`]?.[currentLang] || trade.outcome;
        row.insertCell().textContent = trade.holdingDays;


        const actionCell = row.insertCell();
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = elementsToTranslate['btn-delete-trade'][currentLang];
        deleteBtn.classList.add('btn-danger');
        deleteBtn.onclick = () => confirmDeleteTrade(trade.id); // Call confirmDeleteTrade
        actionCell.appendChild(deleteBtn);
    });
}

// Function to confirm and delete a trade
function confirmDeleteTrade(id) {
    const currentLang = languageSelect.value;
    const confirmationMessage = elementsToTranslate['confirm-delete-trade'][currentLang];

    // Simple modal-like confirmation
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '10000';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    modalContent.style.textAlign = 'center';

    const message = document.createElement('p');
    message.textContent = confirmationMessage;
    message.style.marginBottom = '20px';
    message.style.fontSize = '1.1rem';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = elementsToTranslate['confirm-delete-yes'][currentLang];
    confirmButton.classList.add('btn-primary', 'mr-4');
    confirmButton.onclick = () => {
        deleteTrade(id);
        document.body.removeChild(modal);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = elementsToTranslate['confirm-delete-no'][currentLang];
    cancelButton.classList.add('btn-danger');
    cancelButton.onclick = () => {
        document.body.removeChild(modal);
    };

    modalContent.appendChild(message);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Function to delete a trade (actual deletion)
function deleteTrade(id) {
    trades = trades.filter(trade => trade.id !== id);
    saveTrades(); // Save to local storage after deletion
    showNotification(elementsToTranslate['trade-deleted-success'][languageSelect.value]);
    renderTradeTable();
    calculateAndDisplayStatistics();
}

// Function to confirm and reset all trade data
function confirmResetData() {
    const currentLang = languageSelect.value;
    const confirmationMessage = elementsToTranslate['confirm-reset-data'][currentLang];

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '10000';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    modalContent.style.textAlign = 'center';

    const message = document.createElement('p');
    message.textContent = confirmationMessage;
    message.style.marginBottom = '20px';
    message.style.fontSize = '1.1rem';
    message.style.fontWeight = 'bold';
    message.style.color = '#ef4444'; // Red for warning

    const confirmButton = document.createElement('button');
    confirmButton.textContent = elementsToTranslate['confirm-reset-yes'][currentLang];
    confirmButton.classList.add('btn-danger', 'mr-4');
    confirmButton.onclick = () => {
        resetAllData();
        document.body.removeChild(modal);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = elementsToTranslate['confirm-reset-no'][currentLang];
    cancelButton.classList.add('btn-primary');
    cancelButton.onclick = () => {
        document.body.removeChild(modal);
    };

    modalContent.appendChild(message);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Function to reset all trade data
function resetAllData() {
    trades = []; // Clear the trades array
    localStorage.removeItem('tradingTrades'); // Clear local storage explicitly
    showNotification(elementsToTranslate['data-reset-success'][languageSelect.value], true);
    renderTradeTable();
    calculateAndDisplayStatistics();
}

// Event listeners for initial capital and lot size changes
initialCapitalInput.addEventListener('change', calculateAndDisplayStatistics);
lotSizeInput.addEventListener('change', calculateAndDisplayStatistics);
resetDataBtn.addEventListener('click', confirmResetData);
// Removed exportPdfBtn.addEventListener('click', exportStatisticsToPdf); as per request

// Function to calculate and display all statistics
function calculateAndDisplayStatistics() {
    if (trades.length === 0) {
        // Reset all statistics if no trades
        statWinRate.textContent = '0.00%';
        statTotalProfitPips.textContent = '0.00';
        statTotalLossPips.textContent = '0.00';
        statTotalProfitNominal.textContent = '$0.00';
        statTotalLossNominal.textContent = '$0.00';
        statCapitalGrowthPercent.textContent = '0.00%';
        statProbability.textContent = '0.00%';
        statAvgProfitPips.textContent = '0.00';
        statAvgLossPips.textContent = '0.00';
        statAvgRR.textContent = '0.00';
        statMaxDrawdown.textContent = '0.00%';
        statMaxConsecutiveLoss.textContent = '0';
        statMaxConsecutiveProfit.textContent = '0';
        statMaxLossPips.textContent = '0.00';
        statMaxTpPips.textContent = '0.00';
        statAvgHoldingPeriod.textContent = '0.00';
        pipsSummaryTableBody.innerHTML = '';
        totalOverallPips.textContent = '0.00';
        drawEquityChart([]); // Clear chart
        return;
    }

    let initialCapital = parseFloat(initialCapitalInput.value) || 1000;
    let currentCapital = initialCapital;
    equityHistory = [{ date: 'Start', capital: initialCapital }];

    let totalWins = 0;
    let totalLosses = 0;
    let totalProfitPips = 0;
    let totalLossPips = 0;
    let totalProfitNominal = 0;
    let totalLossNominal = 0;
    let totalRiskReward = 0;
    let rrCount = 0;
    let maxLossPips = 0;
    let maxTpPips = 0;
    let totalHoldingDays = 0;

    let currentConsecutiveWins = 0;
    let maxConsecutiveWins = 0;
    let currentConsecutiveLosses = 0;
    let maxConsecutiveLosses = 0;

    let peakEquity = initialCapital;
    let maxDrawdown = 0;

    const monthlyPips = {}; // { 'YYYY-MM': pips_total }

    trades.forEach(trade => {
        currentCapital += trade.nominalProfitLoss;
        equityHistory.push({ date: trade.closeDate, capital: currentCapital });

        peakEquity = Math.max(peakEquity, currentCapital);
        maxDrawdown = Math.max(maxDrawdown, (peakEquity - currentCapital) / peakEquity * 100);

        if (trade.pips > 0) {
            totalWins++;
            totalProfitPips += trade.pips;
            totalProfitNominal += trade.nominalProfitLoss;
            currentConsecutiveWins++;
            maxConsecutiveLosses = Math.max(maxConsecutiveLosses, currentConsecutiveLosses);
            currentConsecutiveLosses = 0;
            maxTpPips = Math.max(maxTpPips, trade.pips);
        } else {
            totalLosses++;
            totalLossPips += trade.pips;
            totalLossNominal += trade.nominalProfitLoss;
            currentConsecutiveLosses++;
            maxConsecutiveWins = Math.max(maxConsecutiveWins, currentConsecutiveWins);
            currentConsecutiveWins = 0;
            maxLossPips = Math.min(maxLossPips, trade.pips);
        }

        // Calculate Risk/Reward ratio for each trade
        // The calculation for riskPips and rewardPips remains the same
        // as they are based on the defined SL and TP levels relative to entry.
        const riskPips = Math.abs(calculatePips(trade.pair, trade.entry, trade.sl));
        const rewardPips = Math.abs(calculatePips(trade.pair, trade.entry, trade.tp));

        if (riskPips > 0 && rewardPips > 0) { // Ensure no division by zero
            const rr = parseFloat((rewardPips / riskPips).toFixed(2));
            if (!isNaN(rr) && isFinite(rr)) {
                totalRiskReward += rr;
                rrCount++;
            }
        }
        
        totalHoldingDays += trade.holdingDays;

        // Aggregate pips by month
        const closeDate = new Date(trade.closeDate);
        const yearMonth = `${closeDate.getFullYear()}-${(closeDate.getMonth() + 1).toString().padStart(2, '0')}`;
        if (!monthlyPips[yearMonth]) {
            monthlyPips[yearMonth] = 0;
        }
        monthlyPips[yearMonth] += trade.pips;
    });

    // Final check for consecutive streaks
    maxConsecutiveWins = Math.max(maxConsecutiveWins, currentConsecutiveWins);
    maxConsecutiveLosses = Math.max(maxConsecutiveLosses, currentConsecutiveLosses);


    const totalTrades = trades.length;
    const winRate = totalTrades > 0 ? (totalWins / totalTrades * 100) : 0;
    const capitalGrowthPercent = initialCapital > 0 ? ((currentCapital - initialCapital) / initialCapital * 100) : 0;
    const probability = winRate; // In this context, win rate is the probability of winning
    const avgProfitPips = totalWins > 0 ? (totalProfitPips / totalWins) : 0;
    const avgLossPips = totalLosses > 0 ? (totalLossPips / totalLosses) : 0;
    const avgRR = rrCount > 0 ? (totalRiskReward / rrCount) : 0;
    const avgHoldingPeriod = totalTrades > 0 ? (totalHoldingDays / totalTrades) : 0;


    statWinRate.textContent = `${winRate.toFixed(2)}%`;
    statTotalProfitPips.textContent = totalProfitPips.toFixed(2);
    statTotalLossPips.textContent = totalLossPips.toFixed(2);
    statTotalProfitNominal.textContent = `$${totalProfitNominal.toFixed(2)}`;
    statTotalLossNominal.textContent = `$${totalLossNominal.toFixed(2)}`;
    statCapitalGrowthPercent.textContent = `${capitalGrowthPercent.toFixed(2)}%`;
    statProbability.textContent = `${probability.toFixed(2)}%`;
    statAvgProfitPips.textContent = avgProfitPips.toFixed(2);
    statAvgLossPips.textContent = avgLossPips.toFixed(2);
    statAvgRR.textContent = avgRR.toFixed(2);
    statMaxDrawdown.textContent = `${maxDrawdown.toFixed(2)}%`;
    statMaxConsecutiveLoss.textContent = maxConsecutiveLosses;
    statMaxConsecutiveProfit.textContent = maxConsecutiveWins;
    statMaxLossPips.textContent = maxLossPips.toFixed(2);
    statMaxTpPips.textContent = maxTpPips.toFixed(2);
    statAvgHoldingPeriod.textContent = avgHoldingPeriod.toFixed(2);

    drawEquityChart(equityHistory);
    renderPipsSummaryTable(monthlyPips);
}

// Function to draw the equity curve chart
function drawEquityChart(data) {
    const ctx = equityChartCanvas.getContext('2d');
    // Ensure canvas dimensions are set to avoid blurriness
    const dpi = window.devicePixelRatio || 1;
    equityChartCanvas.width = equityChartCanvas.offsetWidth * dpi;
    equityChartCanvas.height = equityChartCanvas.offsetHeight * dpi;
    ctx.scale(dpi, dpi);

    ctx.clearRect(0, 0, equityChartCanvas.offsetWidth, equityChartCanvas.offsetHeight);

    if (data.length <= 1) { // No trades or only initial capital
        ctx.fillStyle = '#6b7280'; // gray-500
        ctx.font = '16px Roboto, sans-serif'; // Changed font
        ctx.textAlign = 'center';
        ctx.fillText(elementsToTranslate['no-chart-data-message'][languageSelect.value], equityChartCanvas.offsetWidth / 2, equityChartCanvas.offsetHeight / 2);
        return;
    }

    const xLabels = data.map(d => d.date);
    const yValues = data.map(d => d.capital);

    const padding = 40;
    const chartWidth = equityChartCanvas.offsetWidth - 2 * padding;
    const chartHeight = equityChartCanvas.offsetHeight - 2 * padding;

    const minCapital = Math.min(...yValues);
    const maxCapital = Math.max(...yValues);

    const yRange = maxCapital - minCapital;
    const xStep = chartWidth / (data.length - 1);
    const yScale = chartHeight / (yRange === 0 ? 1 : yRange); // Avoid division by zero

    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight - (yValues[0] - minCapital) * yScale);
    ctx.strokeStyle = '#294066'; // Darker blue-grey for line
    ctx.lineWidth = 2;
    for (let i = 1; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = padding + chartHeight - (yValues[i] - minCapital) * yScale;
        ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#294066'; // Darker blue-grey for points
    data.forEach((d, i) => {
        const x = padding + i * xStep;
        const y = padding + chartHeight - (d.capital - minCapital) * yScale;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw X-axis (Dates) - simplified for readability
    ctx.strokeStyle = '#e2e8f0'; // Softer gray
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();

    // Draw Y-axis (Capital)
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.stroke();

    // X-axis labels (only a few to avoid clutter)
    ctx.fillStyle = '#475569'; // Slightly darker text
    ctx.font = '10px Roboto, sans-serif'; // Changed font
    ctx.textAlign = 'center';
    const numLabels = Math.min(data.length, 5); // Show up to 5 labels
    for (let i = 0; i < numLabels; i++) {
        const index = Math.floor(i * (data.length - 1) / (numLabels - 1));
        const x = padding + index * xStep;
        ctx.fillText(xLabels[index], x, padding + chartHeight + 15);
    }

    // Y-axis labels (Capital)
    ctx.textAlign = 'right';
    const yLabelCount = 5;
    for (let i = 0; i <= yLabelCount; i++) {
        const labelValue = minCapital + (yRange / yLabelCount) * i;
        const y = padding + chartHeight - (labelValue - minCapital) * yScale;
        ctx.fillText(`$${labelValue.toFixed(0)}`, padding - 5, y + 4);
    }
}


// Function to render the pips summary table
function renderPipsSummaryTable(monthlyPips) {
    pipsSummaryTableBody.innerHTML = '';
    let overallTotalPips = 0;

    const years = Array.from(new Set(Object.keys(monthlyPips).map(ym => ym.substring(0, 4)))).sort();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    years.forEach(year => {
        const row = pipsSummaryTableBody.insertRow();
        const yearCell = row.insertCell();
        yearCell.textContent = year;
        yearCell.classList.add('font-semibold');

        let totalPipsThisYear = 0;
        months.forEach(month => {
            const key = `${year}-${month}`;
            const pips = monthlyPips[key] || 0;
            row.insertCell().textContent = pips.toFixed(2);
            totalPipsThisYear += pips;
        });
        const totalYearCell = row.insertCell();
        totalYearCell.textContent = totalPipsThisYear.toFixed(2);
        totalYearCell.classList.add('font-bold', totalPipsThisYear >= 0 ? 'text-green-600' : 'text-red-600');

        overallTotalPips += totalPipsThisYear;
    });
    totalOverallPips.textContent = overallTotalPips.toFixed(2);
}

// CSV Import/Export Functions
const csvHeaders = [
    "id", "pair", "action", "openDate", "closeDate", "entry", "sl", "tp", "outcome"
];

function exportTradesToCSV() {
    if (trades.length === 0) {
        showNotification(elementsToTranslate['no-data-to-export'][languageSelect.value], true);
        return;
    }

    let csvContent = csvHeaders.map(header => `"${header}"`).join(",") + "\n"; // Quote headers too
    trades.forEach(trade => {
        const row = [
            trade.id,
            trade.pair,
            trade.action,
            trade.openDate,
            trade.closeDate,
            trade.entry,
            trade.sl,
            trade.tp,
            trade.outcome
        ].map(item => `"${item}"`).join(","); // Wrap items in quotes to handle commas
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "trading_backtest_data.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotification(elementsToTranslate['data-exported-success'][languageSelect.value]);
    } else {
        showNotification(elementsToTranslate['browser-no-csv-support'][languageSelect.value], true);
    }
}

async function importTradesFromCSV(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
        const text = e.target.result;
        const lines = text.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            showNotification(elementsToTranslate['csv-empty-invalid'][languageSelect.value], true);
            return;
        }

        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        // Validate headers
        const requiredHeaders = ["pair", "action", "openDate", "closeDate", "entry", "sl", "tp"];
        const missingHeaders = requiredHeaders.filter(header => !headers.includes(header));
        if (missingHeaders.length > 0) {
            showNotification(elementsToTranslate['csv-missing-headers'][languageSelect.value].replace('{headers}', missingHeaders.join(', ')), true);
            return;
        }

        const importedTrades = [];
        for (let i = 1; i < lines.length; i++) {
            const rowData = lines[i].split(',').map(item => item.trim().replace(/"/g, ''));
            if (rowData.length !== headers.length) {
                showNotification(elementsToTranslate['csv-row-invalid-columns'][languageSelect.value].replace('{rowNum}', i + 1), true);
                continue;
            }

            const trade = {};
            headers.forEach((header, index) => {
                trade[header] = rowData[index];
            });

            // Parse numerical values
            trade.entry = parseFloat(trade.entry);
            trade.sl = parseFloat(trade.sl);
            trade.tp = parseFloat(trade.tp);
            trade.id = Date.now() + i; // Assign new unique ID to avoid conflicts

            // Validate parsed data
            if (isNaN(trade.entry) || isNaN(trade.sl) || isNaN(trade.tp) || !trade.pair || !trade.action || !trade.openDate || !trade.closeDate) {
                showNotification(elementsToTranslate['csv-row-invalid-data'][languageSelect.value].replace('{rowNum}', i + 1), true);
                continue;
            }
            if (new Date(trade.closeDate) < new Date(trade.openDate)) {
                showNotification(elementsToTranslate['csv-row-close-date-earlier'][languageSelect.value].replace('{rowNum}', i + 1), true);
                continue;
            }

            let pips = 0;
            // Use outcome from CSV if available, otherwise default to "N/A"
            let outcome = trade.outcome || 'N/A';
            const pipValuePerLot = pipValues[trade.pair] || 10;

            // Recalculate pips based on the imported outcome
            if (outcome === 'TP') {
                pips = calculatePips(trade.pair, trade.entry, trade.tp);
                pips = Math.abs(pips);
            } else if (outcome === 'SL') {
                pips = calculatePips(trade.pair, trade.entry, trade.sl);
                pips = -Math.abs(pips);
            } else {
                pips = 0;
                outcome = 'N/A';
                showNotification(elementsToTranslate['csv-row-invalid-outcome'][languageSelect.value].replace('{rowNum}', i + 1).replace('{outcome}', trade.outcome), true);
            }


            trade.pips = parseFloat(pips.toFixed(2));
            trade.outcome = outcome;
            trade.nominalProfitLoss = parseFloat((trade.pips * (parseFloat(lotSizeInput.value) || 0.01) * pipValuePerLot).toFixed(2));
            trade.holdingDays = calculateHoldingPeriod(trade.openDate, trade.closeDate);

            importedTrades.push(trade);
        }

        if (importedTrades.length > 0) {
            trades = trades.concat(importedTrades);
            trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
            saveTrades(); // Save to local storage after import
            showNotification(elementsToTranslate['trades-imported-success'][languageSelect.value].replace('{count}', importedTrades.length));
            renderTradeTable();
            calculateAndDisplayStatistics();
        } else {
            showNotification(elementsToTranslate['no-valid-trades-in-csv'][languageSelect.value], true);
        }
    };
    reader.readAsText(file);
    importCsvFile.value = ''; // Clear file input
}

// Local Storage Functions
function saveTrades() {
    try {
        localStorage.setItem('tradingTrades', JSON.stringify(trades));
    }
    catch (e) {
        console.error('Error saving trades to local storage:', e);
        showNotification(elementsToTranslate['error-saving-local-storage'][languageSelect.value], true);
    }
}

function loadTrades() {
    try {
        const storedTrades = localStorage.getItem('tradingTrades');
        if (storedTrades) {
            trades = JSON.parse(storedTrades);
            trades.forEach(trade => {
                // Ensure all properties are numbers where expected, and dates are handled
                trade.entry = parseFloat(trade.entry);
                trade.sl = parseFloat(trade.sl);
                trade.tp = parseFloat(trade.tp);
                trade.pips = parseFloat(trade.pips);
                trade.nominalProfitLoss = parseFloat(trade.nominalProfitLoss);
                trade.holdingDays = parseInt(trade.holdingDays);
                // Ensure outcome is set for older stored data
                if (!trade.outcome) {
                    // If outcome is missing, try to infer based on pips or default to 'N/A'
                    if (trade.pips > 0) {
                        trade.outcome = 'TP';
                    } else if (trade.pips < 0) {
                        trade.outcome = 'SL';
                    } else {
                        trade.outcome = 'N/A';
                    }
                }
            });
            trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate)); // Re-sort in case local storage was unsorted
            showNotification(elementsToTranslate['data-loaded-success'][languageSelect.value]);
        }
    }
    catch (e) {
        console.error('Error loading trades from local storage:', e);
        showNotification(elementsToTranslate['error-loading-local-storage'][languageSelect.value], true);
    }
}

// Event listeners for import/export
exportCsvBtn.addEventListener('click', exportTradesToCSV);
importCsvBtn.addEventListener('click', () => importCsvFile.click()); // Trigger file input click
importCsvFile.addEventListener('change', importTradesFromCSV);

// PDF Export Function has been removed as per request.
// If you decide to add it back, remember to uncomment the function and its event listener.


// Page navigation logic
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');

    // Update active class for navigation buttons
    document.querySelectorAll('nav .btn-primary').forEach(btn => {
        btn.classList.remove('active-nav');
    });
    const activeNavButton = document.querySelector(`nav .btn-primary[data-target="${pageId}"]`);
    if (activeNavButton) {
        activeNavButton.classList.add('active-nav');
    }

    // Update statistics when switching to the statistics page
    if (pageId === 'page-statistics') {
        calculateAndDisplayStatistics();
    }
}

// Initial page load sequence:
// 1. Load existing data from local storage
// 2. If no data, populate with dummy data
// 3. Render the trade table and calculate statistics
// 4. Show the default page (data entry)
loadTrades(); // Load any existing data
if (trades.length === 0) { // If no data was loaded, then add dummy data
    addDummyData();
}
renderTradeTable(); // Render table based on loaded/dummy data
calculateAndDisplayStatistics(); // Calculate stats based on loaded/dummy data
showPage('page-data-entry'); // Show the default page


// Optional: Add some dummy data for demonstration
function addDummyData() {
    const dummyTrades = [
        { id: 1, pair: "EURUSD", action: "buy", openDate: "2023-01-05", closeDate: "2023-01-06", entry: 1.07000, sl: 1.06500, tp: 1.07500, outcome: "TP" },
        { id: 2, pair: "GBPUSD", action: "sell", openDate: "2023-01-10", closeDate: "2023-01-11", entry: 1.22000, sl: 1.22500, tp: 1.21500, outcome: "TP" },
        { id: 3, pair: "USDJPY", action: "buy", openDate: "2023-01-15", closeDate: "2023-01-16", entry: 130.500, sl: 130.000, tp: 131.000, outcome: "SL" }, // Changed to SL for demonstration
        { id: 4, pair: "EURUSD", action: "buy", openDate: "2023-02-01", closeDate: "2023-02-02", entry: 1.08000, sl: 1.07500, tp: 1.08500, outcome: "TP" },
        { id: 5, pair: "XAUUSD", action: "buy", openDate: "2023-02-05", closeDate: "2023-02-06", entry: 1900.00, sl: 1890.00, tp: 1910.00, outcome: "TP" },
        { id: 6, pair: "EURJPY", action: "sell", openDate: "2023-03-10", closeDate: "2023-03-12", entry: 145.000, sl: 145.500, tp: 144.500, outcome: "SL" }, // Changed to SL
        { id: 7, pair: "EURUSD", action: "buy", openDate: "2023-03-15", closeDate: "2023-03-16", entry: 1.07500, sl: 1.07000, tp: 1.08000, outcome: "TP" },
        { id: 8, pair: "GBPUSD", action: "sell", openDate: "2023-04-01", closeDate: "2023-04-02", entry: 1.24000, sl: 1.24500, tp: 1.23500, outcome: "TP" },
        { id: 9, pair: "USDJPY", action: "buy", openDate: "2023-04-05", closeDate: "2023-04-06", entry: 133.000, sl: 132.500, tp: 133.500, outcome: "TP" },
        { id: 10, pair: "XAUUSD", action: "sell", openDate: "2023-05-10", closeDate: "2023-05-11", entry: 1950.00, sl: 1960.00, tp: 1940.00, outcome: "TP" }
    ];

    // No need for conditional check here, as it's done before calling addDummyData
    trades = dummyTrades.map(trade => {
        let pips = 0;
        const pipValuePerLot = pipValues[trade.pair] || 10;
        const lotSize = parseFloat(lotSizeInput.value) || 0.01;

        // Calculate pips based on the dummy trade's defined outcome
        if (trade.outcome === 'TP') {
            pips = calculatePips(trade.pair, trade.entry, trade.tp);
            pips = Math.abs(pips);
        } else { // SL
            pips = calculatePips(trade.pair, trade.entry, trade.sl);
            pips = -Math.abs(pips);
        }

        const nominalProfitLoss = pips * lotSize * pipValuePerLot;
        const holdingDays = calculateHoldingPeriod(trade.openDate, trade.closeDate);

        return {
            ...trade,
            pips: parseFloat(pips.toFixed(2)),
            nominalProfitLoss: parseFloat(nominalProfitLoss.toFixed(2)),
            holdingDays
        };
    });
    trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate)); // Sort by date
    saveTrades(); // Save dummy data to local storage
    showNotification(elementsToTranslate['dummy-data-loaded'][languageSelect.value]);
}

// addDummyData() is now called conditionally from the initial load sequence
