from collections import Counter

n = int(input())
arr = list(map(int, input().split()))


count_k = Counter()

for i in range(n-1):
    for j in range(i + 1 , n):
        total = arr[j] + arr[i]
        if (total)% 2 == 0:
            count_k[total // 2] += 1

# print(count_k.items())

most_common = count_k.most_common(1)
print(most_common[0][1])