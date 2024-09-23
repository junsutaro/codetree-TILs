[x, y] = map(int, input().split())

ans = 0

for i in range(x, y+1):
    total_sum = 0
    
    while i >= 10:
        total_sum += i % 10
        i = i // 10
    
    total_sum += i
    ans = max(total_sum, ans)

print(ans)