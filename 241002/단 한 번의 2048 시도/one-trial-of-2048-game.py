arr = [list(map(int, input().split())) for _ in range(4)]
dir = input()

# 싹 다 왼쪽으로 갖다붙인다고 가정하고, 
# U면 90도, R이면 180도, D면 270도 왼쪽으로 돌림
# 돌리고 풀고나서 다시 오른쪽으로 돌려

new_arr = [elem[:] for elem in arr]

if dir == 'U':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[j][3-i]
elif dir == 'R':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-i][3-j]
elif dir == 'D':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-j][i]

# for elem in new_arr:
#     print(*elem)


ans = [[0] * 4 for _ in range(4)]

for i in range(4):
    lst = [num for num in new_arr[i] if num != 0]
    
    j = 0
    idx = 0
    while j < len(lst):
        
        if j >= len(lst) - 1:
            ans[i][idx] = lst[-1]
            break

        if lst[j] == lst[j+1]:
            ans[i][idx] = lst[j] * 2
            j += 2
            idx += 1
        
        else:
            ans[i][idx] = lst[j]
            j += 1
            idx += 1

# print()
# for elem in ans:
#     print(*elem)

ANS = [elem[:] for elem in ans]

if dir == 'D':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[j][3-i]
elif dir == 'R':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[3-i][3-j]
elif dir == 'U':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[3-j][i]

for elem in ANS:
    print(*elem)