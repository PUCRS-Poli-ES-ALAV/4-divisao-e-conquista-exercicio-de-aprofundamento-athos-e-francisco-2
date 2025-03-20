// O algoritmo a seguir (que não utiliza divisão-e-conquista) encontra o maior valor em um vetor.
// teste-o para vetores de inteiros com conteúdos randômicos, e tamanho 32, 2048 e 1.048.576.
//  Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto;

// long maxVal1(long A[], int n) {  
//     long max = A[0];
//     for (int i = 1; i < n; i++) {  
//         if( A[i] > max ) 
//            max = A[i];
//     }
//     return max;
// }


const maxVal1 = (A) => {
    let max = A[0];
    let iteracoes = 0;
    for (let i = 0; i < A.length; i++) {
        iteracoes++;
        if (A[i] > max) {
            max = A[i];
        }
    }
    return { max, iteracoes };
}

const testarMaxVal1 = (tamanho) => {
    let vetor = Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho));
    console.log(`Testando MaxVal1 para vetor de tamanho ${tamanho}`);
    let inicio = performance.now();
    let { max, iteracoes } = maxVal1(vetor);
    let fim = performance.now();
    console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)} ms`);
    console.log(`Número de iterações: ${iteracoes}`);
    console.log('----------------------------------------');
}

testarMaxVal1(32);
testarMaxVal1(2048);
testarMaxVal1(1048576);
