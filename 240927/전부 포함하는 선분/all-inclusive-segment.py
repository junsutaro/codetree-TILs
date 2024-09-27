n = int(input())
lines = [tuple(map(int, input().split())) for _ in range(n)]


ans = float('inf')

for i in range(n):
    left = float('inf')
    right = 0
    for j in range(n):
        if i == j:
            continue
        left = min(lines[j][0], left)
        right = max(lines[j][1], right)
    ans = min(ans, right - left)

print(ans)