n = int(input())
before = list(map(int, input().split()))
after = list(map(int, input().split()))

ans = 0

for i in range(n - 1):
    if before[i] > after[i]:
        move = (before[i] - after[i])
        before[i] -= move
        before[i + 1] += move
        ans += move
    else:
        continue


print(ans)