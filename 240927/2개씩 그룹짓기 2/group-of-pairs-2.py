n = int(input())
arr = list(map(int, input().split()))

arr.sort()

# arr = [num - arr[0] for num in arr]

# print(arr)

ans = float('inf')
for i in range(n):
    temp = arr[n + i] - arr[i]
    # print(arr[n+i], arr[i], temp)
    ans = min(temp, ans)

print(ans)