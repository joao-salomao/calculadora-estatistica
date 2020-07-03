const formatNumber = value => {
    if (isNaN(value)) {
        return 0;
    }
    return value.toFixed(2);
}

const mean = arr => {
    const total = arr.reduce((acc, v) => acc + v, 0);
    const result = (total / arr.length);
    return formatNumber(result);
}

const mode = arr => {
    const counts = []
    arr.forEach((value) => {
        const item = counts.find(item => item.index == value)
        if (item) {
            const itemArrayIndex = counts.indexOf(item)
            counts[itemArrayIndex].count++;
        } else {
            counts.push({
                index: value,
                count: 1
            })
        }
    })

    counts.sort((a, b) => a.count < b.count)
    return counts[0].index
}

const median = arr => {
    if (arr.length == 1) {
        return arr[0]
    }

    arr.sort((a, b) => a - b)

    if (arr.length % 2 == 0) {
        return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
    }
    return arr[Math.ceil(arr.length / 2) - 1]
}

const spread = arr => {
    arr.sort((a, b) => a - b);
    const max = arr[arr.length - 1];
    const min = arr[0];
    return formatNumber(max - min);
}

const variance = arr => {
    const result = (arr.reduce((acc, value) => acc + Math.pow(value - mean(arr), 2), 0) / arr.length)
    return formatNumber(result);
}

const standardDeviation = arr => {
    const s2 = variance(arr);
    const result = Math.sqrt(s2);
    return formatNumber(result);
}

const coefficientOfVariation = arr => {
    const result = ((standardDeviation(arr) / mean(arr)) * 100)
    return formatNumber(result)
}

const getDescriptiveMeasures = arr => {
    return {
        mean: mean(arr),
        mode: mode(arr),
        median: median(arr),
        spread: spread(arr),
        variance: variance(arr),
        standardDeviation: standardDeviation(arr),
        coefficientOfVariation: coefficientOfVariation(arr),
    }
}
