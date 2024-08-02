def build_prefix_table(pattern):
    prefix_table = [0] * len(pattern)
    j = 0

    for i in range(1, len(pattern) - 1):

        while j > 0 and pattern[j] != pattern[i]:
            j = prefix_table[j-1]

        if pattern[j] == pattern[i]:
            j += 1
            pattern[i] = j
    
    return prefix_table

def kmp_search(text, pattern):
    prefix_table = build_prefix_table(pattern)
    j = 0
    
    for i in range(len(text)):
        while j > 0 and text[i] != pattern[j]:
            j = prefix_table[j - 1]
        
        if text[i] == pattern[j]:
            j += 1

        if j == len(pattern):
            return i - j + 1
    return -1

str_A = input()
str_B = input()
print(kmp_search(str_A, str_B))