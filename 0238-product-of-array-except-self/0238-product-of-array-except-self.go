func productExceptSelf(nums []int) []int {
    // loop through nums array twice, storing prefix and then using postfix * prefix as answer

    res := make([]int, len(nums));
    prefix := 1

    for i, v := range nums {
        res[i] = prefix
        prefix *= v
    }

    postfix := 1
    for i := len(nums) - 1; i >= 0; i-- {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}