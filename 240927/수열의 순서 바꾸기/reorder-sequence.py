n = int(input())
arr = list(map(int, input().split()))

expected = n
cnt = 0

for i in range(n - 1, -1, -1):
    if arr[i] == expected:
        cnt += 1
        expected -= 1

answer = n - cnt
print(answer)