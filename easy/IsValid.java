import java.util.Stack;

public class IsValid {

    private static char[] leftPara = {'{', '[', '('};
    private static char[] rightPara = {'}', ']', ')'};

    public static boolean isLeftPara(char c) {
        for (int i = 0; i < leftPara.length; i++) {
            if (c == leftPara[i]) return true;
        }
        return false;
    }

    public static boolean isRightPara(char c) {
        for(int i = 0; i < rightPara.length; i++) {
            if (c == rightPara[i]) return true;
        }
        return false;
    }

    public static boolean isMatchingPara(char c, char c2) {
        for (int i = 0; i < leftPara.length; i++) {
            if (c == leftPara[i] && c2 == rightPara[i]) return true;
        }
        return false; 
    }

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (isLeftPara(c)) {
                stack.push(c);
            }

            else if (isRightPara(c)) {
                if (stack.isEmpty()) {
                    return false;
                }
                else {
                    if (!isMatchingPara(stack.pop(), c)) {
                        return false;
                    }
                }
            }
        }
        return stack.isEmpty();
    }
}
