public class PrefixCount {

    public int prefixCount(String[] words, String pref) {
        int counter = 0;
        for(String word : words) {
            if (word.startsWith(pref)) {
                counter++;
            }
        }
        return counter;
    }
}
