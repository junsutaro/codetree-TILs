n = int(input())
pigeons = [tuple(map(int, input().split())) for _ in range(n)]

pos_check = {}

ans = 0
for pigeon, pos in pigeons:

    if pigeon not in pos_check:
        pos_check[pigeon] = pos
    
    if pos_check[pigeon] != pos:
        ans += 1
        pos_check[pigeon] = pos

print(ans)