const toggleTab = (tabButton, activeTabId) => {
    const items = document.getElementsByClassName("nav-bar-item")
    for (const item of items) {
        item.style['background-color'] = null
    }
    tabButton.style['background-color'] = "#111"

    const tabs = document.getElementsByClassName("tab-content");
    for (const tab of tabs) {
        tab.style['display'] = 'none'
    }

    document.getElementById(activeTabId).style.display = "block";
}


const getValues = () => {
    let arr = document.getElementById("values").value.trim()
    arr = arr.split(',').map(str => parseFloat(str))
    return arr;
}

const generateChart = arr => {
    const chartDiv = document.getElementById('chart-div')

    const oldChart = document.getElementById('chart')
    const oldChartJsSizeMonitors = document.getElementsByClassName('chartjs-size-monitor')

    if (oldChart) {
        chartDiv.removeChild(oldChart)
        for (const monitor of oldChartJsSizeMonitors) {
            chartDiv.removeChild(monitor)
        }
    }

    const canvas = document.createElement("CANVAS")
    canvas.id = "chart"
    canvas.height = 100;

    chartDiv.appendChild(canvas)

    new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: arr.map((value, i) => i),
            datasets: [{
                label: 'Dados',
                pointBackgroundColor: 'rgb(255, 255, 255)',
                backgroundColor: 'rgb(184, 134, 11)',
                borderColor: 'rgb(17, 17, 17)',
                data: arr
            }]
        },
        options: {}
    });
}

const calculate = () => {
    const validationNode = document.getElementById("validation-message")

    const arr = getValues();
    if (arr.includes(NaN)) {
        validationNode.style['display'] = 'block'
        return;
    }

    validationNode.style['display'] = 'none'

    const {
        mode,
        mean,
        median,
        spread,
        variance,
        standardDeviation,
        coefficientOfVariation
    } = getDescriptiveMeasures(arr)

    generateChart(arr)
    document.getElementById("mode").innerHTML = mode
    document.getElementById("mean").innerHTML = mean
    document.getElementById("median").innerHTML = median
    document.getElementById("spread").innerHTML = spread
    document.getElementById("variance").innerHTML = variance
    document.getElementById("standard-deviation").innerHTML = standardDeviation
    document.getElementById("coefficient-of-variation").innerHTML = `${coefficientOfVariation} %`
}
