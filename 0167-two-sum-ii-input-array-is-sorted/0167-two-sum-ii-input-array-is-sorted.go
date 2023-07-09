func twoSum(numbers []int, target int) []int {
    // [1, 2, 4, 6, 8, 9, 13, 14] target 12

    // two pointer method
    // beginning and end pointer
    // add beginning and end, decrement end if sum > target, increment beginning if sum < target
    // if no solution found when beginngin == end, return false

    sum := 0;
    start, end := 0, len(numbers) - 1

    for {
        sum = numbers[start] + numbers[end]
        if sum == target {
            return []int{start+1, end+1}
        }
        if sum > target {
            end--
        } else if sum < target {
            start++
        }
    }
    
    return []int{0, 0};

}