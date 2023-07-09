func longestConsecutive(nums []int) int {
    // build a map with all integers
    // iterate over map, check if current int is the start of a sequence
    // if it is, begin checking n+1... until the sequence is over
    // check if max length has been achieved, update if so
        // else just continue to next int in map

    m := make(map[int]struct{});
    res := 0;

    for _, v := range nums {
        m[v] = struct{}{};
    };

    for key := range m {
        if _, ok := m[key - 1]; ok {
            continue;
        } else {
        curr := 1;
            for {
                if _, ok := m[key + curr]; ok {
                    curr++;
                    continue;
                }
                //check max length
                if curr > res {
                    res = curr;
                }
                    break;
            }

        }
    }

    return res;
    
}