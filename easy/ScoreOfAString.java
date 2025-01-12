public class ScoreOfAString {
    public static int scoreOfString(String s) {
        
        int value = 0;
        char[] arr = s.toCharArray();

        for (int i = 0; i < arr.length - 1; i++) {
            value += Math.abs(arr[i] - arr[i + 1]);
        }
        return value;
    }

    public static void main(String[] args) {
        String hello = "zaz";
        scoreOfString(hello);
    }
}
