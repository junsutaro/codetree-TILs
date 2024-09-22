n = int(input())
arr = [tuple(map(int, input().split())) for _ in range(n)]
ans = 0

for i in range(n):
    count = [0] * (100)
    for j in range(n):
        if i == j:
            continue
        
        x1, x2 = arr[j]
        for k in range(x1, x2):
            count[k] += 1
        
    non_zero_count = sum(1 for x in count if x != 0)
    ans = max(ans, non_zero_count)   

print(ans)