const apiUrl = `https://open.er-api.com/v6/latest`;

// Lista de códigos de moneda y países
const currencyCountryList = [
    { code: 'AED', country: 'Emiratos Árabes Unidos' },
    { code: 'AFN', country: 'Afganistán' },
    { code: 'ALL', country: 'Albania' },
    { code: 'AMD', country: 'Armenia' },
    { code: 'ANG', country: 'Antillas Neerlandesas' },
    { code: 'AOA', country: 'Angola' },
    { code: 'ARS', country: 'Argentina' },
    { code: 'AUD', country: 'Australia' },
    { code: 'AWG', country: 'Aruba' },
    { code: 'AZN', country: 'Azerbaiyán' },
    { code: 'BAM', country: 'Bosnia y Herzegovina' },
    { code: 'BBD', country: 'Barbados' },
    { code: 'BDT', country: 'Bangladés' },
    { code: 'BGN', country: 'Bulgaria' },
    { code: 'BHD', country: 'Baréin' },
    { code: 'BIF', country: 'Burundi' },
    { code: 'BMD', country: 'Bermudas' },
    { code: 'BND', country: 'Brunéi' },
    { code: 'BOB', country: 'Bolivia' },
    { code: 'BRL', country: 'Brasil' },
    { code: 'BSD', country: 'Bahamas' },
    { code: 'BTN', country: 'Bután' },
    { code: 'BWP', country: 'Botsuana' },
    { code: 'BYN', country: 'Bielorrusia' },
    { code: 'BZD', country: 'Belice' },
    { code: 'CAD', country: 'Canadá' },
    { code: 'CDF', country: 'República Democrática del Congo' },
    { code: 'CHF', country: 'Suiza' },
    { code: 'CLP', country: 'Chile' },
    { code: 'CNY', country: 'China' },
    { code: 'COP', country: 'Colombia' },
    { code: 'CRC', country: 'Costa Rica' },
    { code: 'CUP', country: 'Cuba' },
    { code: 'CVE', country: 'Cabo Verde' },
    { code: 'CZK', country: 'República Checa' },
    { code: 'DJF', country: 'Yibuti' },
    { code: 'DKK', country: 'Dinamarca' },
    { code: 'DOP', country: 'República Dominicana' },
    { code: 'DZD', country: 'Argelia' },
    { code: 'EGP', country: 'Egipto' },
    { code: 'ERN', country: 'Eritrea' },
    { code: 'ETB', country: 'Etiopía' },
    { code: 'EUR', country: 'Unión Europea' },
    { code: 'FJD', country: 'Fiyi' },
    { code: 'FKP', country: 'Islas Malvinas' },
    { code: 'FOK', country: 'Islas Feroe' },
    { code: 'GBP', country: 'Reino Unido' },
    { code: 'GEL', country: 'Georgia' },
    { code: 'GGP', country: 'Guernsey' },
    { code: 'GHS', country: 'Ghana' },
    { code: 'GIP', country: 'Gibraltar' },
    { code: 'GMD', country: 'Gambia' },
    { code: 'GNF', country: 'Guinea' },
    { code: 'GTQ', country: 'Guatemala' },
    { code: 'GYD', country: 'Guyana' },
    { code: 'HKD', country: 'Hong Kong' },
    { code: 'HNL', country: 'Honduras' },
    { code: 'HRK', country: 'Croacia' },
    { code: 'HTG', country: 'Haití' },
    { code: 'HUF', country: 'Hungría' },
    { code: 'IDR', country: 'Indonesia' },
    { code: 'ILS', country: 'Israel' },
    { code: 'IMP', country: 'Isla de Man' },
    { code: 'INR', country: 'India' },
    { code: 'IQD', country: 'Irak' },
    { code: 'IRR', country: 'Irán' },
    { code: 'ISK', country: 'Islandia' },
    { code: 'JMD', country: 'Jamaica' },
    { code: 'JOD', country: 'Jordania' },
    { code: 'JPY', country: 'Japón' },
    { code: 'KES', country: 'Kenia' },
    { code: 'KGS', country: 'Kirguistán' },
    { code: 'KHR', country: 'Camboya' },
    { code: 'KID', country: 'Kiribati' },
    { code: 'KMF', country: 'Comoras' },
    { code: 'KRW', country: 'Corea del Sur' },
    { code: 'KWD', country: 'Kuwait' },
    { code: 'KYD', country: 'Islas Caimán' },
    { code: 'KZT', country: 'Kazajistán' },
    { code: 'LAK', country: 'Laos' },
    { code: 'LBP', country: 'Líbano' },
    { code: 'LKR', country: 'Sri Lanka' },
    { code: 'LRD', country: 'Liberia' },
    { code: 'LSL', country: 'Lesoto' },
    { code: 'LYD', country: 'Libia' },
    { code: 'MAD', country: 'Marruecos' },
    { code: 'MDL', country: 'Moldavia' },
    { code: 'MGA', country: 'Madagascar' },
    { code: 'MKD', country: 'Macedonia del Norte' },
    { code: 'MMK', country: 'Birmania' },
    { code: 'MNT', country: 'Mongolia' },
    { code: 'MOP', country: 'Macao' },
    { code: 'MRU', country: 'Mauritania' },
    { code: 'MUR', country: 'Mauricio' },
    { code: 'MVR', country: 'Maldivas' },
    { code: 'MWK', country: 'Malaui' },
    { code: 'MXN', country: 'México' },
    { code: 'MYR', country: 'Malasia' },
    { code: 'MZN', country: 'Mozambique' },
    { code: 'NAD', country: 'Namibia' },
    { code: 'NGN', country: 'Nigeria' },
    { code: 'NIO', country: 'Nicaragua' },
    { code: 'NOK', country: 'Noruega' },
    { code: 'NPR', country: 'Nepal' },
    { code: 'NZD', country: 'Nueva Zelanda' },
    { code: 'OMR', country: 'Omán' },
    { code: 'PAB', country: 'Panamá' },
    { code: 'PEN', country: 'Perú' },
    { code: 'PGK', country: 'Papúa Nueva Guinea' },
    { code: 'PHP', country: 'Filipinas' },
    { code: 'PKR', country: 'Pakistán' },
    { code: 'PLN', country: 'Polonia' },
    { code: 'PYG', country: 'Paraguay' },
    { code: 'QAR', country: 'Catar' },
    { code: 'RON', country: 'Rumania' },
    { code: 'RSD', country: 'Serbia' },
    { code: 'RUB', country: 'Rusia' },
    { code: 'RWF', country: 'Ruanda' },
    { code: 'SAR', country: 'Arabia Saudita' },
    { code: 'SBD', country: 'Islas Salomón' },
    { code: 'SCR', country: 'Seychelles' },
    { code: 'SDG', country: 'Sudán' },
    { code: 'SEK', country: 'Suecia' },
    { code: 'SGD', country: 'Singapur' },
    { code: 'SHP', country: 'Santa Elena' },
    { code: 'SLE', country: 'Sierra Leona' },
    { code: 'SLL', country: 'Sierra Leona' },
    { code: 'SOS', country: 'Somalia' },
    { code: 'SRD', country: 'Surinam' },
    { code: 'SSP', country: 'Sudán del Sur' },
    { code: 'STN', country: 'Santo Tomé y Príncipe' },
    { code: 'SYP', country: 'Siria' },
    { code: 'SZL', country: 'Esuatini' },
    { code: 'THB', country: 'Tailandia' },
    { code: 'TJS', country: 'Tayikistán' },
    { code: 'TMT', country: 'Turkmenistán' },
    { code: 'TND', country: 'Túnez' },
    { code: 'TOP', country: 'Tonga' },
    { code: 'TRY', country: 'Turquía' },
    { code: 'TTD', country: 'Trinidad y Tobago' },
    { code: 'TVD', country: 'Tuvalu' },
    { code: 'TZS', country: 'Tanzania' },
    { code: 'UAH', country: 'Ucrania' },
    { code: 'UGX', country: 'Uganda' },
    { code: 'USD', country: 'Estados Unidos' },
    { code: 'UYU', country: 'Uruguay' },
    { code: 'UZS', country: 'Uzbekistán' },
    { code: 'VES', country: 'Venezuela' },
    { code: 'VND', country: 'Vietnam' },
    { code: 'VUV', country: 'Vanuatu' },
    { code: 'WST', country: 'Samoa' },
    { code: 'XAF', country: 'África Central' },
    { code: 'XCD', country: 'Caribe Oriental' },
    { code: 'XDR', country: 'Derechos Especiales de Giro' },
    { code: 'XOF', country: 'África Occidental' },
    { code: 'XPF', country: 'Polinesia Francesa' },
    { code: 'YER', country: 'Yemen' },
    { code: 'ZAR', country: 'Sudáfrica' },
    { code: 'ZMW', country: 'Zambia' },
    { code: 'ZWL', country: 'Zimbabue' }

    // Agrega más códigos y países según sea necesario
];

// Ordenar la lista alfabéticamente por nombre de país
currencyCountryList.sort((a, b) => a.country.localeCompare(b.country));

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencyKeys = Object.keys(data.rates);
            const fromCurrencySelect = document.getElementById('from-currency');
            const toCurrencySelect = document.getElementById('to-currency');

            // Poblar los selectores de moneda
            currencyKeys.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.textContent = currency;
                fromCurrencySelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.textContent = currency;
                toCurrencySelect.appendChild(optionTo);
            });

            // Valores predeterminados
            fromCurrencySelect.value = 'USD';
            toCurrencySelect.value = 'EUR';
        });

    // Mostrar el modal con los códigos de moneda y países
    const showCurrencyCodesLink = document.getElementById('show-currency-codes');
    const currencyModal = document.getElementById('currency-modal');
    const closeModalButton = document.querySelector('.close-button');
    const currencyCodesListDiv = document.getElementById('currency-codes-list');

    showCurrencyCodesLink.addEventListener('click', (event) => {
        event.preventDefault();
        currencyCodesListDiv.innerHTML = ''; // Limpiar contenido anterior

        const ul = document.createElement('ul');

        // Llenar la lista con códigos de moneda y nombres de países
        currencyCountryList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.code} - ${item.country}`;
            ul.appendChild(li);
        });

        currencyCodesListDiv.appendChild(ul);
        currencyModal.style.display = 'block'; // Mostrar el modal
    });

    // Cerrar el modal
    closeModalButton.addEventListener('click', () => {
        currencyModal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == currencyModal) {
            currencyModal.style.display = 'none';
        }
    });

    // Manejar la conversión de moneda
    document.getElementById('converter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;
        const amount = document.getElementById('amount').value;

        const conversionUrl = `${apiUrl}/${fromCurrency}`;

        fetch(conversionUrl)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                document.getElementById('result').innerText = 
                    `${amount} ${fromCurrency} es equivalente a ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                console.error('Error al obtener las tasas de cambio:', error);
                document.getElementById('result').innerText = 'Error al obtener las tasas de cambio.';
            });
    });
});
