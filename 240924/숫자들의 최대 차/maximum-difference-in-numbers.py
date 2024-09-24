n, k = map(int, input().split())
nums = [int(input()) for _ in range(n)]

ans = 0

import itertools
for i in range(1, n+1):
    num_combs = itertools.combinations(nums, i)

    for num_comb in num_combs:
        if (max(num_comb) - min(num_comb)) <= k:
            ans = max(len(num_comb), ans)

print(ans)