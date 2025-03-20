public class BigIntegerMultiplication {
    private static long conversionIterationsX = 0;
    private static long conversionIterationsY = 0;
    private static long multiplicationInstructions = 0;

    public static long multiply(String X, String Y) {
        conversionIterationsX = 0;
        conversionIterationsY = 0;
        multiplicationInstructions = 0;

        long x = binaryStringToLong(X, true);
        long y = binaryStringToLong(Y, false);

        multiplicationInstructions++;
        return x * y;
    }

    private static long binaryStringToLong(String binary, boolean isX) {
        long result = 0;
        for (int i = 0; i < binary.length(); i++) {
            result = (result << 1) + (binary.charAt(i) - '0');
            if (isX) {
                conversionIterationsX++;
            } else {
                conversionIterationsY++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String X = "1110";
        String Y = "1101";

        long result = multiply(X, Y);
        System.out.println("Resultado da multiplicação: " + result);
        System.out.println("Iterações na conversão de X: " + conversionIterationsX);
        System.out.println("Iterações na conversão de Y: " + conversionIterationsY);
        System.out.println("Instruções de multiplicação: " + multiplicationInstructions);
        System.out.println("Total de instruções: " + (conversionIterationsX + conversionIterationsY + multiplicationInstructions));
    }
}