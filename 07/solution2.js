function capitalize(s){
    return [s.split('').map((a, i) => i % 2 === 0 ? a.toUpperCase() : a).join(''), s.split('').map((a, i) => i % 2 !== 0 ? a.toUpperCase() : a).join('')];
}