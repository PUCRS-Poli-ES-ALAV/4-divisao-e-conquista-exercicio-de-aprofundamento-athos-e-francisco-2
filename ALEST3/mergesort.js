let iteracoes = 0;

const mergeSort = (vetor) => {
    if (vetor.length <= 1) {
        return vetor;
    }

    const meio = Math.floor(vetor.length / 2);

    const esquerda = vetor.slice(0, meio);
    const direita = vetor.slice(meio);

    return merge(mergeSort(esquerda), mergeSort(direita));
}

const merge = (esquerda, direita) => {
    let resultado = [];
    let indexEsquerda = 0;
    let indexDireita = 0;

    while (indexEsquerda < esquerda.length && indexDireita < direita.length) {
        iteracoes++;
        if (esquerda[indexEsquerda] < direita[indexDireita]) {
            resultado.push(esquerda[indexEsquerda]);
            indexEsquerda++;
        } else {
            resultado.push(direita[indexDireita]);
            indexDireita++;
        }
    }

    return resultado.concat(esquerda.slice(indexEsquerda)).concat(direita.slice(indexDireita));
}

const testarMergeSort = (tamanho) => {
    iteracoes = 0;
    let vetor = Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho));

    console.log(`Testando MergeSort para vetor de tamanho ${tamanho}`);
    let inicio = performance.now();
    let vetorOrdenado = mergeSort(vetor);
    let fim = performance.now();

    console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)} ms`);
    console.log(`Número de iterações: ${iteracoes}`);
    console.log('----------------------------------------');
}

testarMergeSort(32);
testarMergeSort(2048);
testarMergeSort(1048576);