n, m, p = map(int,(input().split()))
msgs = [tuple(input().split()) for _ in range(m)]

ans_lst = []
for i in range(n):
    ans_lst.append(chr(65+i))

new_p = p

for i in range(p-2, -1, -1):
    if msgs[i][1] == msgs[p-1][1]:
        new_p = i + 1 # p는 번째, i 는idx라서 + 1
    else:
        break

for i in range(new_p - 1, m): # p는 번째, i는 idx라서 -1
    if msgs[i][0] in ans_lst:
        ans_lst.remove(msgs[i][0])

ans_lst.sort()

if p == 1:
    ans_lst = []
print(*ans_lst)