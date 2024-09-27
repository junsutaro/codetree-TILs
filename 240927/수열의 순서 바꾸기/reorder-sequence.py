n = int(input())
arr = list(map(int, input().split()))

count = 0
expected = n
for i in range(n - 1, -1, -1):
    if arr[i] == expected:
        count += 1
        expected -= 1
    else:
        break

print(n - count)