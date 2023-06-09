const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    const libras = data.GBPBRL.high
    console.log(data);

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: "BRL",
    }).format(inputReais)
    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: "USD",
        }).format(inputReais / dolar)

    }
    if (select.value === "€ Euro") {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: "EUR",
        }).format(inputReais / euro)
    }
    if (select.value === "₿ Bitcoin") {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }
    if (select.value === "£ Libra") {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: "GBP",
        }).format(inputReais / libras)
    }

}
changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assetes/estados-unidos (1) 1.png"
    }
    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assetes/Euro.png"
    }
    if (select.value === "£ Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assetes/libra 1.png"
    }
    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assetes/BitCoin.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)