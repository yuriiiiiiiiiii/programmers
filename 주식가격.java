class Solution {
    public int[] solution(int[] prices) {
        int[] result = new int[prices.length];
        
        for (int i = 0; i < prices.length - 1; i++) {
            int standard = prices[i];
            for (int j = i + 1; j < prices.length; j++) {
                result[i]++;
                if (standard > prices[j]) break; // 가격 떨어짐
            }
        }
        
        return result;
    }
}