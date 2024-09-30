n, m, q = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
winds = [list(map(int, input().split())) for _ in range(q)]

di = [0, 0, 1, 0, -1]
dj = [0, 1, 0, -1, 0]

# for elem in arr:
#     print(*elem)

import copy

# 바람아~ 불어라~
for wind in winds:
    r1, c1, r2, c2 = wind # 2 2 4 6
    origin_arr = [lst[:] for lst in arr]

    for i in range(r1 - 1, r2):
        for j in range(c1 - 1, c2):
            if i == r1 - 1 and j != c1 - 1:
                arr[i][j] = origin_arr[i][j - 1]  # 맨 위에서 왼쪽으로 이동
            elif i != r1 - 1 and j == c2 - 1:
                arr[i][j] = origin_arr[i - 1][j]  # 맨 오른쪽에서 위로 이동
            elif i == r2 - 1 and j != c2 - 1:
                arr[i][j] = origin_arr[i][j + 1]  # 맨 아래에서 오른쪽으로 이동
            elif i != r2 - 1 and j == c1 - 1:
                arr[i][j] = origin_arr[i + 1][j]  # 맨 왼쪽에서 아래로 이동
    # print()
    # for elem in arr:
    #     print(*elem)

    changed_arr = [lst[:] for lst in arr]
    
    for i in range(r1 - 1, r2):
        for j in range(c1 - 1, c2):
            if r1-1 <= i <= r2-1 or c1-1 <= j <= c2-1:
                
                temp = 0
                cnt = 0
                for k in range(5):
                    ni = i + di[k]
                    nj = j + dj[k]

                    if 0 <= ni < n and 0 <= nj < m:
                        temp += changed_arr[ni][nj]
                        cnt += 1
                
                arr[i][j] = temp // cnt

    # print()
    # for elem in arr:
    #     print(*elem)

for elem in arr:
    print(*elem)