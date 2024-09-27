n = int(input())
arr = list(map(int, input().split()))

arr.sort()


ans = float('inf')
for i in range(n):
    temp = arr[n + i] - arr[i]
    ans = min(temp, ans)

print(ans)