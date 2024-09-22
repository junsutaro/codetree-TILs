import sys;

MAX_SIZE = sys.maxsize
n = int(input());
arr = [tuple(map(int, input().split())) for _ in range(n)];

ans = 0
min_distance = MAX_SIZE

for i in range(n - 1):
    for j in range(i+ 1, n):
        temp_distance = abs(arr[i][0] - arr[j][0]) + abs(arr[i][1] - arr[j][1])
        if temp_distance < min_distance:
            min_distance = temp_distance
            ans = (arr[i][0] - arr[j][0])**2 + (arr[i][1] - arr[j][1])**2

print(ans)