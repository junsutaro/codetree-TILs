arr = [list(map(int, input().split())) for _ in range(4)]
dir = input()

# 배열을 회전하기 위한 작업
new_arr = [[0] * 4 for _ in range(4)]
if dir == 'U':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[j][3-i]  # 시계 반대 방향으로 90도
elif dir == 'R':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-i][3-j]  # 180도 회전
elif dir == 'D':
    for i in range(4):
        for j in range(4):
            new_arr[i][j] = arr[3-j][i]  # 시계 방향으로 90도
else:
    new_arr = arr  # 방향이 L인 경우는 회전 없음

# 싹 다 왼쪽으로 붙이는 작업
ans = [[0] * 4 for _ in range(4)]
for i in range(4):
    temp = []
    for j in range(4):
        if new_arr[i][j] != 0:  # 0이 아닌 숫자만 임시 배열에 모음
            temp.append(new_arr[i][j])

    # 숫자가 같은 경우 합치기
    k = 0
    while k < len(temp) - 1:
        if temp[k] == temp[k + 1]:
            temp[k] *= 2
            del temp[k + 1]  # 합친 후 그 다음 숫자 제거
        k += 1

    # 왼쪽으로 붙이고 오른쪽에 0을 채워서 4칸 맞춤
    for j in range(len(temp)):
        ans[i][j] = temp[j]

# 처리 후 다시 원래 방향으로 회전
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

# 결과 출력
for elem in ANS:
    print(*elem)