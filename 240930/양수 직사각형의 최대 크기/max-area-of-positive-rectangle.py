n, m = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]
# arr = [[6, -2, 4, -3, 1,], [3, 6, 7, -4, 1],[6, 1, 8, 15, -5],[3, -5, 1, 16, 3]]

def all_plus(arr, a1, b1, a2, b2):
    for i in range(a1, a2+1):
        for j in range(b1, b2+1):
            if arr[i][j] <= 0:
                return False
    return True

import itertools
combs = itertools.product(range(n), range(m), range(n), range(m));

ans = -1

for a1, b1, a2, b2 in combs:
    if a1 > a2 or b1 > b2:
        continue

    if all_plus(arr, a1, b1, a2, b2):
        # print(a1, b1, ',', a2, b2)
        temp = (b2 + 1 - b1) * (a2 + 1 - a1)

        ans = max(ans, temp)

print(ans)