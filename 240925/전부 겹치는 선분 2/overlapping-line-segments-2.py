n = int(input())
lines = [tuple(map(int, input().split())) for _ in range(n)]

import itertools
line_combs = itertools.combinations(lines, n-1)



ans = 'No'
for comb in line_combs:
    cnt = [0] * 101
    for a, b in comb:
        for i in range(a, b+1):
            cnt[i] += 1
    if max(cnt) == n-1:
        ans = "Yes"
        break;
    
    
print(ans)