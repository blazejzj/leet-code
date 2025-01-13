
public class RomanToInt {
    public static int romanToInt(String s) {
        int counter = 0;
    
        for (int i = 0; i < s.length(); i++) {
            int currIndex = getValue(s.charAt(i));
            int nextIndex = 0;
    
            if (i + 1 < s.length()) {
                nextIndex = getValue(s.charAt(i + 1));
            }
    
            if (currIndex < nextIndex) {
                counter -= currIndex;

            } else {
                counter += currIndex;
            }
        }
    
        return counter;
    }
    

    public static int getValue(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        String s = "III";
        romanToInt(s);
        System.out.println(romanToInt(s));
    }
}