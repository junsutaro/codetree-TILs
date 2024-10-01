arr = [list(map(int, input().split())) for _ in range(4)]
dir = input()

# 싹 다 왼쪽으로 갖다붙인다고 가정하고, 
# U면 90도, R이면 180도, D면 270도 왼쪽으로 돌림
# 돌리고 풀고나서 다시 오른쪽으로 돌려

new_arr = [[0] * 4 for _ in range(4)]
if dir == 'U':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-j][3-i]
elif dir == 'R':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-i][3-j]
elif dir == 'D':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-j][i]

ans = [[0] * 4 for _ in range(4)]
for i in range(4):
    cnt = 0
    temp = []
    for j in range(4):

        if new_arr[i][j] == 0:
            continue

        cnt += 1

        if j == 3:
            if cnt == 1:
                temp.append(new_arr[i][j])
            else:
                temp.append(new_arr[i][j] * 2)

        elif cnt == 2:
            cnt = 0
            temp.append(new_arr[i][j] * 2)

        elif new_arr[i][j] != new_arr[i][j+1]:
            cnt = 0
            temp.append(new_arr[i][j])


    for j in range(len(temp)):
        ans[i][j] = temp[j]


ANS = [[0] * 4 for _ in range(4)]
if dir == 'U':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[j][3-i]  # 다시 시계 방향 90도 돌림
elif dir == 'R':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[3-i][3-j]  # 180도 회전
elif dir == 'D':
    for i in range(4):
        for j in range(4):
            ANS[i][j] = ans[3-j][i]  # 시계 반대 방향 90도 돌림
else:
    ANS = ans  # L인 경우는 그대로


for elem in ANS:
    print(*elem)