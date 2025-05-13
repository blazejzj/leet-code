public class ThreeDivisors {
    public static boolean isThree(int n) {
        int counter = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {counter++;}
        }
        
        return counter == 3;
    }

    public static void main(String[] args) {
        isThree(4);
    }
}
