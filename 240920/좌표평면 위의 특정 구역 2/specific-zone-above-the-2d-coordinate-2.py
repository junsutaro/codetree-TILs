import sys
n = int(input())
MAX_VALUE = sys.maxsize

arr = [tuple(map(int, input().split())) for _ in range(n)]
ans = MAX_VALUE

for i in range(n):
    max_x = 0
    max_y = 0
    min_x = MAX_VALUE
    min_y = MAX_VALUE

    for j in range(n):
        if i == j:
            continue


        max_x = max(arr[j][0], max_x)
        max_y = max(arr[j][1], max_y)
        min_x = min(arr[j][0], min_x)
        min_y = min(arr[j][1], min_y)

    ans = min(ans, (max_x - min_x) * (max_y - min_y))

print(ans)