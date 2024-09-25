x1, x2, x3, x4 = list(map(int, input().split()))

mx = max(x1, x2, x3, x4)
cnt_lst = [0] * ( mx + 1 )
for i in range(x1, x2):
    cnt_lst[i] += 1
for i in range(x3, x4):
    cnt_lst[i] += 1

if max(cnt_lst) >= 2:
    print(intersecting)
else:
    print(nonintersecting)