// O algoritmo a seguir (que utiliza divisão-e-conquista) encontra o maior valor em um vetor.
// teste-o para vetores de inteiros com conteúdos randômicos, e tamanho 32, 2048 e 1.048.576.
//  Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto;

// long maxVal2(long A[], int init, int end) {  
//     if (end - init <= 1)
//         return max(A[init], A[end]);  
//     else {
//           int m = (init + end)/2;
//           long v1 = maxVal2(A,init,m);   
//           long v2 = maxVal2(A,m+1,end);  
//           return max(v1,v2);
//          }
// }

let iteracoes = 0;

const maxVal2 = (A, init, end) => {
    iteracoes++;
    if (end - init <= 1)
        return Math.max(A[init], A[end]);
    else {
        let m = Math.floor((init + end) / 2);
        let v1 = maxVal2(A, init, m);
        let v2 = maxVal2(A, m + 1, end);
        return Math.max(v1, v2);
    }
}

const testarMaxVal2 = (tamanho) => {
    iteracoes = 0;
    let vetor = Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho));
    console.log(`Testando MaxVal2 para vetor de tamanho ${tamanho}`);
    let inicio = performance.now();
    let max = maxVal2(vetor, 0, vetor.length - 1);
    let fim = performance.now();
    console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)} ms`);
    console.log(`Número de iterações: ${iteracoes}`);
    console.log('----------------------------------------');
}

testarMaxVal2(32);
testarMaxVal2(2048);
testarMaxVal2(1048576);

