
// A Multiplicação Inteira de n-bits recebe dois números inteiros x e y de n-bits e retorna o resutado de x * y.

// Assim, novamente:

// implemente o algortimo abaixo;
// teste-o para os 3 casos de valores inteiros: com 4 bits, com 16 bits e com 64 bits. Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto.

let iteracoes = 0;

const multiply = (x, y, n) => {
    iteracoes++;
    if (n === 1) {
        return x * y;
    } else {
        const m = Math.ceil(n / 2); // Usar teto para divisão correta dos bits
        const shift = BigInt(m);
        const pow2m = 1n << shift; // Equivalente a 2^m

        // Divisão correta usando BigInt e operações bitwise
        const a = x >> shift;
        const b = x & (pow2m - 1n);
        const c = y >> shift;
        const d = y & (pow2m - 1n);

        const e = multiply(a, c, m);
        const f = multiply(b, d, m);
        const g = multiply(b, c, m);
        const h = multiply(a, d, m);

        // Cálculo do resultado com operações bitwise
        const parte1 = e << (2n * shift);
        const parte2 = (g + h) << shift;
        return parte1 + parte2 + f;
    }
}

const testarMultiply = (n) => {
    iteracoes = 0;
    const max = 1n << BigInt(n); // Valor máximo para n bits (2^n)
    const x = (1n << BigInt(n)) - 1n; // Exemplo: número com todos os bits setados
    const y = (1n << BigInt(n)) - 1n;

    console.log(`Testando Multiply para números de ${n} bits`);
    const inicio = performance.now();
    const resultado = multiply(x, y, n);
    const fim = performance.now();

    console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)} ms`);
    console.log(`Número de iterações: ${iteracoes}`);
    console.log('----------------------------------------');
}

testarMultiply(4);
testarMultiply(16);
testarMultiply(64);
