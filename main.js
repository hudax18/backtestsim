// Array to store trade data
let trades = [];
let equityHistory = [];

// Language elements (defined early for immediate use by setLanguage)
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
    // Notification messages
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

// Function to show a temporary notification message
function showNotification(message, isError = false) {
    const notificationBox = document.getElementById('notification-box'); // Get it here to ensure it exists
    if (!notificationBox) {
        console.error('Notification box element not found!');
        return;
    }
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

// Function to set the current language
function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    // Update document title (browser tab)
    const appDocumentTitle = document.getElementById('app-document-title'); // Get it here to ensure it exists
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

// Function to add a new trade
function addTrade() {
    const pair = document.getElementById('trade-pair').value;
    const action = document.querySelector('input[name="trade-action"]:checked').value;
    const openDate = document.getElementById('trade-open-date').value;
    const closeDate = document.getElementById('trade-close-date').value;
    const entry = parseFloat(document.getElementById('trade-entry').value);
    const sl = parseFloat(document.getElementById('trade-sl').value);
    const tp = parseFloat(document.getElementById('trade-tp').value);
    const selectedOutcome = document.querySelector('input[name="trade-outcome"]:checked').value;

    if (!openDate || !closeDate || isNaN(entry) || isNaN(sl) || isNaN(tp)) {
        showNotification(elementsToTranslate['validation-fill-all-fields'][languageSelect.value], true);
        return;
    }
    if (new Date(closeDate) < new Date(openDate)) {
        showNotification(elementsToTranslate['validation-close-date-earlier'][languageSelect.value], true);
        return;
    }

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
    const pipValuePerLot = pipValues[pair] || 10;

    if (selectedOutcome === 'TP') {
        pips = calculatePips(pair, entry, tp);
        pips = Math.abs(pips);
    } else { // selectedOutcome === 'SL'
        pips = calculatePips(pair, entry, sl);
        pips = -Math.abs(pips);
    }

    const nominalProfitLoss = pips * (parseFloat(document.getElementById('lot-size').value) || 0.01) * pipValuePerLot;
    const holdingDays = calculateHoldingPeriod(openDate, closeDate);

    const newTrade = {
        id: Date.now(),
        pair,
        action,
        openDate,
        closeDate,
        entry,
        sl,
        tp,
        pips: parseFloat(pips.toFixed(2)),
        outcome: selectedOutcome,
        nominalProfitLoss: parseFloat(nominalProfitLoss.toFixed(2)),
        holdingDays
    };

    trades.push(newTrade);
    trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
    saveTrades();
    showNotification(elementsToTranslate['trade-added-success'][languageSelect.value]);
    clearTradeInputs();
    renderTradeTable();
    calculateAndDisplayStatistics();
}

// Function to clear trade input fields
function clearTradeInputs() {
    document.getElementById('trade-pair').value = 'XAUUSD';
    document.querySelector('input[name="trade-action"][value="buy"]').checked = true;
    document.querySelector('input[name="trade-outcome"][value="TP"]').checked = true;
    document.getElementById('trade-open-date').value = '';
    document.getElementById('trade-close-date').value = '';
    document.getElementById('trade-entry').value = '';
    document.getElementById('trade-sl').value = '';
    document.getElementById('trade-tp').value = '';
    // Manually trigger change to update step values (and handle potential NaN)
    document.getElementById('trade-pair').dispatchEvent(new Event('change'));
}

// Function to handle changes in trade entry/sl/tp inputs for step adjustment
function handlePriceInputChange() {
    const pair = document.getElementById('trade-pair').value;
    const decimalCount = decimalPlaces[pair] || 5;

    const inputs = [
        document.getElementById('trade-entry'),
        document.getElementById('trade-sl'),
        document.getElementById('trade-tp')
    ];

    inputs.forEach(input => {
        // Ensure step is set correctly
        input.step = 1 / Math.pow(10, decimalCount);

        // Handle value formatting if it's a number, otherwise keep it as is (e.g., empty string)
        let value = parseFloat(input.value);
        if (!isNaN(value)) {
            input.value = value.toFixed(decimalCount);
        }
        // If it's NaN (e.g., empty string), we leave it as an empty string to prevent "NaN" display
    });
}


// Function to render the trade table
function renderTradeTable() {
    const tradeTableBody = document.getElementById('trade-table-body');
    if (!tradeTableBody) return; // Guard clause
    
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
        deleteBtn.onclick = () => confirmDeleteTrade(trade.id);
        actionCell.appendChild(deleteBtn);
    });
}

// Function to confirm and delete a trade
function confirmDeleteTrade(id) {
    const currentLang = languageSelect.value;
    const confirmationMessage = elementsToTranslate['confirm-delete-trade'][currentLang];

    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50'); // Tailwind classes for modal overlay

    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-xl', 'text-center', 'max-w-sm', 'mx-auto'); // Tailwind classes for modal content

    const message = document.createElement('p');
    message.textContent = confirmationMessage;
    message.classList.add('mb-5', 'text-lg', 'font-semibold', 'text-gray-800');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'justify-center', 'space-x-4');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = elementsToTranslate['confirm-delete-yes'][currentLang];
    confirmButton.classList.add('btn-primary'); // Re-use existing primary button style
    confirmButton.onclick = () => {
        deleteTrade(id);
        document.body.removeChild(modal);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = elementsToTranslate['confirm-delete-no'][currentLang];
    cancelButton.classList.add('btn-danger'); // Re-use existing danger button style
    cancelButton.onclick = () => {
        document.body.removeChild(modal);
    };

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    modalContent.appendChild(message);
    modalContent.appendChild(buttonContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}


// Function to delete a trade (actual deletion)
function deleteTrade(id) {
    trades = trades.filter(trade => trade.id !== id);
    saveTrades();
    showNotification(elementsToTranslate['trade-deleted-success'][languageSelect.value]);
    renderTradeTable();
    calculateAndDisplayStatistics();
}

// Function to confirm and reset all trade data
function confirmResetData() {
    const currentLang = languageSelect.value;
    const confirmationMessage = elementsToTranslate['confirm-reset-data'][currentLang];

    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50'); // Tailwind classes for modal overlay

    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-xl', 'text-center', 'max-w-sm', 'mx-auto'); // Tailwind classes for modal content

    const message = document.createElement('p');
    message.textContent = confirmationMessage;
    message.classList.add('mb-5', 'text-lg', 'font-bold', 'text-red-600'); // Stronger warning color

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'justify-center', 'space-x-4');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = elementsToTranslate['confirm-reset-yes'][currentLang];
    confirmButton.classList.add('btn-danger'); // Use danger style for confirming reset
    confirmButton.onclick = () => {
        resetAllData();
        document.body.removeChild(modal);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = elementsToTranslate['confirm-reset-no'][currentLang];
    cancelButton.classList.add('btn-primary'); // Use primary style for cancelling
    cancelButton.onclick = () => {
        document.body.removeChild(modal);
    };

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    modalContent.appendChild(message);
    modalContent.appendChild(buttonContainer);
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

// Function to calculate and display all statistics
function calculateAndDisplayStatistics() {
    // Get elements inside the function to ensure they are available when this is called by navigation
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
    const equityChartCanvas = document.getElementById('equity-chart');


    if (trades.length === 0) {
        // Reset all statistics if no trades
        if (statWinRate) statWinRate.textContent = '0.00%';
        if (statTotalProfitPips) statTotalProfitPips.textContent = '0.00';
        if (statTotalLossPips) statTotalLossPips.textContent = '0.00';
        if (statTotalProfitNominal) statTotalProfitNominal.textContent = '$0.00';
        if (statTotalLossNominal) statTotalLossNominal.textContent = '$0.00';
        if (statCapitalGrowthPercent) statCapitalGrowthPercent.textContent = '0.00%';
        if (statProbability) statProbability.textContent = '0.00%';
        if (statAvgProfitPips) statAvgProfitPips.textContent = '0.00';
        if (statAvgLossPips) statAvgLossPips.textContent = '0.00';
        if (statAvgRR) statAvgRR.textContent = '0.00';
        if (statMaxDrawdown) statMaxDrawdown.textContent = '0.00%';
        if (statMaxConsecutiveLoss) statMaxConsecutiveLoss.textContent = '0';
        if (statMaxConsecutiveProfit) statMaxConsecutiveProfit.textContent = '0';
        if (statMaxLossPips) statMaxLossPips.textContent = '0.00';
        if (statMaxTpPips) statMaxTpPips.textContent = '0.00';
        if (statAvgHoldingPeriod) statAvgHoldingPeriod.textContent = '0.00';
        if (pipsSummaryTableBody) pipsSummaryTableBody.innerHTML = '';
        if (totalOverallPips) totalOverallPips.textContent = '0.00';
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

        const riskPips = Math.abs(calculatePips(trade.pair, trade.entry, trade.sl));
        const rewardPips = Math.abs(calculatePips(trade.pair, trade.entry, trade.tp));

        if (riskPips > 0 && rewardPips > 0) {
            const rr = parseFloat((rewardPips / riskPips).toFixed(2));
            if (!isNaN(rr) && isFinite(rr)) {
                totalRiskReward += rr;
                rrCount++;
            }
        }
        
        totalHoldingDays += trade.holdingDays;

        const closeDate = new Date(trade.closeDate);
        const yearMonth = `${closeDate.getFullYear()}-${(closeDate.getMonth() + 1).toString().padStart(2, '0')}`;
        if (!monthlyPips[yearMonth]) {
            monthlyPips[yearMonth] = 0;
        }
        monthlyPips[yearMonth] += trade.pips;
    });

    maxConsecutiveWins = Math.max(maxConsecutiveWins, currentConsecutiveWins);
    maxConsecutiveLosses = Math.max(maxConsecutiveLosses, currentConsecutiveLosses);


    const totalTrades = trades.length;
    const winRate = totalTrades > 0 ? (totalWins / totalTrades * 100) : 0;
    const capitalGrowthPercent = initialCapital > 0 ? ((currentCapital - initialCapital) / initialCapital * 100) : 0;
    const probability = winRate;
    const avgProfitPips = totalWins > 0 ? (totalProfitPips / totalWins) : 0;
    const avgLossPips = totalLosses > 0 ? (totalLossPips / totalLosses) : 0;
    const avgRR = rrCount > 0 ? (totalRiskReward / rrCount) : 0;
    const avgHoldingPeriod = totalTrades > 0 ? (totalHoldingDays / totalTrades) : 0;


    if (statWinRate) statWinRate.textContent = `${winRate.toFixed(2)}%`;
    if (statTotalProfitPips) statTotalProfitPips.textContent = totalProfitPips.toFixed(2);
    if (statTotalLossPips) statTotalLossPips.textContent = totalLossPips.toFixed(2);
    if (statTotalProfitNominal) statTotalProfitNominal.textContent = `$${totalProfitNominal.toFixed(2)}`;
    if (statTotalLossNominal) statTotalLossNominal.textContent = `$${totalLossNominal.toFixed(2)}`;
    if (statCapitalGrowthPercent) statCapitalGrowthPercent.textContent = `${capitalGrowthPercent.toFixed(2)}%`;
    if (statProbability) statProbability.textContent = `${probability.toFixed(2)}%`;
    if (statAvgProfitPips) statAvgProfitPips.textContent = avgProfitPips.toFixed(2);
    if (statAvgLossPips) statAvgLossPips.textContent = avgLossPips.toFixed(2);
    if (statAvgRR) statAvgRR.textContent = avgRR.toFixed(2);
    if (statMaxDrawdown) statMaxDrawdown.textContent = `${maxDrawdown.toFixed(2)}%`;
    if (statMaxConsecutiveLoss) statMaxConsecutiveLoss.textContent = maxConsecutiveLosses;
    if (statMaxConsecutiveProfit) statMaxConsecutiveProfit.textContent = maxConsecutiveWins;
    if (statMaxLossPips) statMaxLossPips.textContent = maxLossPips.toFixed(2);
    if (statMaxTpPips) statMaxTpPips.textContent = maxTpPips.toFixed(2);
    if (statAvgHoldingPeriod) statAvgHoldingPeriod.textContent = avgHoldingPeriod.toFixed(2);

    drawEquityChart(equityHistory);
    renderPipsSummaryTable(monthlyPips);
}

// Function to draw the equity curve chart
function drawEquityChart(data) {
    const equityChartCanvas = document.getElementById('equity-chart'); // Get it here to ensure it exists
    if (!equityChartCanvas) return; // Guard clause

    const ctx = equityChartCanvas.getContext('2d');
    const dpi = window.devicePixelRatio || 1;
    equityChartCanvas.width = equityChartCanvas.offsetWidth * dpi;
    equityChartCanvas.height = equityChartCanvas.offsetHeight * dpi;
    ctx.scale(dpi, dpi);

    ctx.clearRect(0, 0, equityChartCanvas.offsetWidth, equityChartCanvas.offsetHeight);

    if (data.length <= 1) {
        ctx.fillStyle = '#6b7280';
        ctx.font = '16px Roboto, sans-serif';
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
    const yScale = chartHeight / (yRange === 0 ? 1 : yRange);

    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight - (yValues[0] - minCapital) * yScale);
    ctx.strokeStyle = '#294066';
    ctx.lineWidth = 2;
    for (let i = 1; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = padding + chartHeight - (yValues[i] - minCapital) * yScale;
        ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.fillStyle = '#294066';
    data.forEach((d, i) => {
        const x = padding + i * xStep;
        const y = padding + chartHeight - (d.capital - minCapital) * yScale;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = '10px Roboto, sans-serif';
    ctx.textAlign = 'center';
    const numLabels = Math.min(data.length, 5);
    for (let i = 0; i < numLabels; i++) {
        const index = Math.floor(i * (data.length - 1) / (numLabels - 1));
        const x = padding + index * xStep;
        ctx.fillText(xLabels[index], x, padding + chartHeight + 15);
    }

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
    const pipsSummaryTableBody = document.getElementById('pips-summary-table-body');
    const totalOverallPipsElement = document.getElementById('total-overall-pips');

    if (!pipsSummaryTableBody || !totalOverallPipsElement) return; // Guard clause

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
            const cell = row.insertCell();
            cell.textContent = pips.toFixed(2);
            // Add color based on profit/loss for monthly pips
            if (pips > 0) {
                cell.classList.add('text-green-600');
            } else if (pips < 0) {
                cell.classList.add('text-red-600');
            }
            totalPipsThisYear += pips;
        });
        const totalYearCell = row.insertCell();
        totalYearCell.textContent = totalPipsThisYear.toFixed(2);
        totalYearCell.classList.add('font-bold');
        if (totalPipsThisYear > 0) {
            totalYearCell.classList.add('text-green-600');
        } else if (totalPipsThisYear < 0) {
            totalYearCell.classList.add('text-red-600');
        }

        overallTotalPips += totalPipsThisYear;
    });
    totalOverallPipsElement.textContent = overallTotalPips.toFixed(2);
    // Also color the overall total pips
    if (overallTotalPips > 0) {
        totalOverallPipsElement.classList.remove('text-red-600');
        totalOverallPipsElement.classList.add('text-green-600');
    } else if (overallTotalPips < 0) {
        totalOverallPipsElement.classList.remove('text-green-600');
        totalOverallPipsElement.classList.add('text-red-600');
    } else {
        totalOverallPipsElement.classList.remove('text-green-600', 'text-red-600');
    }
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

    let csvContent = csvHeaders.map(header => `"${header}"`).join(",") + "\n";
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
        ].map(item => `"${item}"`).join(",");
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
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

            trade.entry = parseFloat(trade.entry);
            trade.sl = parseFloat(trade.sl);
            trade.tp = parseFloat(trade.tp);
            trade.id = Date.now() + i;

            if (isNaN(trade.entry) || isNaN(trade.sl) || isNaN(trade.tp) || !trade.pair || !trade.action || !trade.openDate || !trade.closeDate) {
                showNotification(elementsToTranslate['csv-row-invalid-data'][languageSelect.value].replace('{rowNum}', i + 1), true);
                continue;
            }
            if (new Date(trade.closeDate) < new Date(trade.openDate)) {
                showNotification(elementsToTranslate['csv-row-close-date-earlier'][languageSelect.value].replace('{rowNum}', i + 1), true);
                continue;
            }

            let pips = 0;
            let outcome = trade.outcome || 'N/A';
            const pipValuePerLot = pipValues[trade.pair] || 10;

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
            trade.nominalProfitLoss = parseFloat((trade.pips * (parseFloat(document.getElementById('lot-size').value) || 0.01) * pipValuePerLot).toFixed(2));
            trade.holdingDays = calculateHoldingPeriod(trade.openDate, trade.closeDate);

            importedTrades.push(trade);
        }

        if (importedTrades.length > 0) {
            trades = trades.concat(importedTrades);
            trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
            saveTrades();
            showNotification(elementsToTranslate['trades-imported-success'][languageSelect.value].replace('{count}', importedTrades.length));
            renderTradeTable();
            calculateAndDisplayStatistics();
        } else {
            showNotification(elementsToTranslate['no-valid-trades-in-csv'][languageSelect.value], true);
        }
    };
    reader.readAsText(file);
    document.getElementById('import-csv-file').value = ''; // Clear file input
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
                trade.entry = parseFloat(trade.entry);
                trade.sl = parseFloat(trade.sl);
                trade.tp = parseFloat(trade.tp);
                trade.pips = parseFloat(trade.pips);
                trade.nominalProfitLoss = parseFloat(trade.nominalProfitLoss);
                trade.holdingDays = parseInt(trade.holdingDays);
                if (!trade.outcome) {
                    if (trade.pips > 0) {
                        trade.outcome = 'TP';
                    } else if (trade.pips < 0) {
                        trade.outcome = 'SL';
                    } else {
                        trade.outcome = 'N/A';
                    }
                }
            });
            trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
            showNotification(elementsToTranslate['data-loaded-success'][languageSelect.value]);
        }
    }
    catch (e) {
        console.error('Error loading trades from local storage:', e);
        showNotification(elementsToTranslate['error-loading-local-storage'][languageSelect.value], true);
    }
}

// Page navigation logic
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');

    document.querySelectorAll('nav .btn-primary').forEach(btn => {
        btn.classList.remove('active-nav');
    });
    const activeNavButton = document.querySelector(`nav .btn-primary[data-target="${pageId}"]`);
    if (activeNavButton) {
        activeNavButton.classList.add('active-nav');
    }

    if (pageId === 'page-statistics') {
        calculateAndDisplayStatistics();
    }
}

// Optional: Add some dummy data for demonstration
function addDummyData() {
    const dummyTrades = [
        { id: 1, pair: "EURUSD", action: "buy", openDate: "2023-01-05", closeDate: "2023-01-06", entry: 1.07000, sl: 1.06500, tp: 1.07500, outcome: "TP" },
        { id: 2, pair: "GBPUSD", action: "sell", openDate: "2023-01-10", closeDate: "2023-01-11", entry: 1.22000, sl: 1.22500, tp: 1.21500, outcome: "TP" },
        { id: 3, pair: "USDJPY", action: "buy", openDate: "2023-01-15", closeDate: "2023-01-16", entry: 130.500, sl: 130.000, tp: 131.000, outcome: "SL" },
        { id: 4, pair: "EURUSD", action: "buy", openDate: "2023-02-01", closeDate: "2023-02-02", entry: 1.08000, sl: 1.07500, tp: 1.08500, outcome: "TP" },
        { id: 5, pair: "XAUUSD", action: "buy", openDate: "2023-02-05", closeDate: "2023-02-06", entry: 1900.00, sl: 1890.00, tp: 1910.00, outcome: "TP" },
        { id: 6, pair: "EURJPY", action: "sell", openDate: "2023-03-10", closeDate: "2023-03-12", entry: 145.000, sl: 145.500, tp: 144.500, outcome: "SL" },
        { id: 7, pair: "EURUSD", action: "buy", openDate: "2023-03-15", closeDate: "2023-03-16", entry: 1.07500, sl: 1.07000, tp: 1.08000, outcome: "TP" },
        { id: 8, pair: "GBPUSD", action: "sell", openDate: "2023-04-01", closeDate: "2023-04-02", entry: 1.24000, sl: 1.24500, tp: 1.23500, outcome: "TP" },
        { id: 9, pair: "USDJPY", action: "buy", openDate: "2023-04-05", closeDate: "2023-04-06", entry: 133.000, sl: 132.500, tp: 133.500, outcome: "TP" },
        { id: 10, pair: "XAUUSD", action: "sell", openDate: "2023-05-10", closeDate: "2023-05-11", entry: 1950.00, sl: 1960.00, tp: 1940.00, outcome: "TP" }
    ];

    trades = dummyTrades.map(trade => {
        let pips = 0;
        const pipValuePerLot = pipValues[trade.pair] || 10;
        const lotSize = parseFloat(document.getElementById('lot-size').value) || 0.01; // Ensure lot-size is accessed here

        if (trade.outcome === 'TP') {
            pips = calculatePips(trade.pair, trade.entry, trade.tp);
            pips = Math.abs(pips);
        } else {
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
    trades.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
    saveTrades();
    showNotification(elementsToTranslate['dummy-data-loaded'][languageSelect.value]);
}


// This ensures all DOM elements are loaded before we try to access them
// and attach event listeners, preventing 'Cannot read properties of null' errors.
document.addEventListener('DOMContentLoaded', () => {
    // Re-get DOM elements here inside DOMContentLoaded
    const tradePairSelect = document.getElementById('trade-pair');
    const addTradeBtn = document.getElementById('add-trade-btn');
    const initialCapitalInput = document.getElementById('initial-capital');
    const lotSizeInput = document.getElementById('lot-size');
    const resetDataBtn = document.getElementById('reset-data-btn');
    const importCsvBtn = document.getElementById('import-csv-btn');
    const exportCsvBtn = document.getElementById('export-csv-btn');
    const importCsvFile = document.getElementById('import-csv-file');
    const navDataEntryBtn = document.getElementById('nav-data-entry');
    const navStatisticsBtn = document.getElementById('nav-statistics');

    // Attach Event Listeners
    if (addTradeBtn) addTradeBtn.addEventListener('click', addTrade);
    if (initialCapitalInput) initialCapitalInput.addEventListener('change', calculateAndDisplayStatistics);
    if (lotSizeInput) lotSizeInput.addEventListener('change', calculateAndDisplayStatistics);
    if (resetDataBtn) resetDataBtn.addEventListener('click', confirmResetData);
    if (importCsvBtn) importCsvBtn.addEventListener('click', () => importCsvFile.click());
    if (importCsvFile) importCsvFile.addEventListener('change', importTradesFromCSV);
    if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportTradesToCSV);

    // Event listener for trade pair select to adjust step
    if (tradePairSelect) {
        tradePairSelect.addEventListener('change', handlePriceInputChange);
    }
    // Also attach to the price inputs themselves for initial formatting on load or manual input
    const priceInputs = document.querySelectorAll('#trade-entry, #trade-sl, #trade-tp');
    priceInputs.forEach(input => {
        input.addEventListener('change', handlePriceInputChange); // Re-format on change
        // Also call once on load for initial formatting if values are present
        handlePriceInputChange.call(input); // Call in context of the input
    });


    // Navigation listeners
    if (navDataEntryBtn) navDataEntryBtn.addEventListener('click', () => showPage('page-data-entry'));
    if (navStatisticsBtn) navStatisticsBtn.addEventListener('click', () => showPage('page-statistics'));

    // Initial load sequence
    loadTrades();
    // Only add dummy data if no trades were loaded (empty localStorage)
    if (trades.length === 0) {
        addDummyData();
    }
    renderTradeTable();
    calculateAndDisplayStatistics();
    setLanguage(languageSelect.value); // Ensure language is set on load
    showPage('page-data-entry'); // Show the default page
});
