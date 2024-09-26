n = int(input())
blocks = [int(input()) for _ in range(n)]

avg = sum(blocks) // n

ans = 0
for block in blocks:
    if block >= avg:
        ans += (block - avg)

print(ans)