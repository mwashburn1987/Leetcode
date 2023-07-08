import "sort"
func topKFrequent(nums []int, k int) []int {
    // create a map with num and count
    // loop through nums, increment count in map
    // sort map by value
    // pop k elements from sorted keys
    // return
    m := make(map[int]int);

    for _, v := range nums {
        m[v]++
    }
    // create int slice that stores keys for sorting map values
    keys := make([]int, 0, len(m));

    for key := range m {
        keys = append(keys, key);
    }
    sort.SliceStable(keys, func(i, j int) bool {return m[keys[i]] > m[keys[j]]});
    
    kCount := k;
    res := []int{}

    for _, v := range keys {
        res = append(res, v);
        kCount--;
        if kCount == 0 {
            return res;
        }
    }
    return res;
}