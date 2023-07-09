func isPalindrome(s string) bool {
    // remove non alpha numeric chars
    // create pointer at start and end
    // incr / decr pointers, check equality
    // return false if inequality found
    // return true

    b, e := 0, len(s) - 1;

    for b < e {
        l := rune(s[b])
        r := rune(s[e])

        // use unicode to check for non char
        if !unicode.IsLetter(l) && !unicode.IsDigit(l) {
            b++
        } else if !unicode.IsLetter(r) && !unicode.IsDigit(r) {
            e--
        } else if unicode.ToLower(l) == unicode.ToLower(r) {
            b++
            e--
        } else {
            return false
        }
    }
    return true;
}