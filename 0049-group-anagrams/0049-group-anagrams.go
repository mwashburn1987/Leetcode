func groupAnagrams(strs []string) [][]string {
    //make map of string key, slice of strings value
    //convert string to bytes, sort, convert back to string
    //store sorted string in map (sorted:[unsorted, unsorted, unsorted...])
    //create return slice of string slices
    //loop through map, append each slice into your return slice of slices :)
    //return

    m := make(map[string][]string);

    for _, s := range strs {
        bytes := []byte(s);
        sort.Slice(bytes, func(i, j int) bool {
            return bytes[i] < bytes[j];
        });
        sorted := string(bytes);
        m[sorted] = append(m[sorted], s)
    }
      res := make([][]string, 0);

        for _, v := range m {
            res = append(res, v);
        }
    return res;
}