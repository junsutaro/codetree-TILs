from collections import Counter

n = int(input())
arr = list(map(int, input().split()))


count_k = [0] * 101

for i in range(n-1):
    for j in range(i + 1 , n):
        total = arr[j] + arr[i]
        if (total)% 2 == 0:
            count_k[total // 2] += 1

max_count = 0;
for i in range(100):
    max_count = max(max_count, count_k[i])

print(max_count)