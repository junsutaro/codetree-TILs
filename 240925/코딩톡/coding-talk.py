n, m, p = map(int,(input().split()))
msgs = [tuple(input().split()) for _ in range(m)]

ans_lst = []
for i in range(n):
    ans_lst.append(chr(65+i))

for i in range(m):
    if i >= p-1:
        if msgs[i][0] in ans_lst:
            ans_lst.remove(msgs[i][0])
ans_lst.sort()
print(*ans_lst)