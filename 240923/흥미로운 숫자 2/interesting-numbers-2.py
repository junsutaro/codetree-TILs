[x, y] = map(int ,input().split());

ans = 0
for i in range(x, y+1):

    i_list = list(map(int, str(i)))
    counted = [0] * 10

    for elem in i_list:
        counted[elem] += 1

    
    cnt_num = sum(1 for x in counted if x != 0)
    
    if cnt_num == 2:
        ans += 1


print(ans)