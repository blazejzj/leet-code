
public class BuildArrayFromPermutation {
    public static int[] buildArray(int[] nums) {
        int[] answer = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            answer[i] = nums[nums[i]];
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 0};
        buildArray(nums);
    }
}
