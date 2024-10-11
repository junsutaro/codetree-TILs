n = int(input())
start_i, start_j = map(int, input().split())
temp = [list(input()) for _ in range(n)]


arr = [[0] * (n+2) for _ in range(n+2)]
visited = [[0] * (n+2) for _ in range(n+2)]
for i in range(n):
    for j in range(n):
        arr[i+1][j+1] = temp[i][j]



# 우 상 좌 하
di = [0, -1, 0, 1]
dj = [1, 0, -1, 0]

# 이거 앞이 벽인지 or 앞이 탈출인지 체크하려다가
# ni nj 가 범위 밖인지 안인지 나눠서 체크해야 하는데
# 차라리 arr을 0으로 빙 둘러서 감싼다음 arr이 n+2 * n+2 크기로 된다음
# 밖이 0이면 탈출, 벽이면 못감 이런식으로 푼다면 ?

# 초기조건 세팅
i = start_i
j = start_j
visited[i][j] = 1
time = 0
dir = 0 # 초기 방향
dir_cnt = 0
while True:

    if dir_cnt == 4:
        ans = -1
        break

    next = arr[i+di[dir]][j+dj[dir]]

    # 앞이 벽이면 방향 바꾸기
    if next == '#':
        dir = (dir + 1) % 4
        dir_cnt += 1
        continue # while문 다시 실행
    
    # 앞이 0이면 탈출하고 visited=9 남기고 종료
    elif next == 0:
        # print 하던가 함수만들어서 return 하던가
        visited[i+di[dir]][j+dj[dir]] = 9
        dir_cnt = 0

        time += 1
        ans = time
        break

    # 그 둘다 아니면? 간 후에 
    ni = i + di[dir]
    nj = j + dj[dir]
    time += 1
    
    # 오른쪽에 벽이 있나 체크
    # 그 오른쪽 : 가서 오른쪽으로 한칸 더 간 위치.
    # dir을 직접 바꾸지 말자 가기전에 체크만 하는거임
    ni_right = i + di[(dir + 3) % 4]
    nj_right = j + dj[(dir + 3) % 4]
    
    # 벽이 없으면?
    if arr[ni_right][nj_right] == '.':
        # 가고 dir도 바꿔
        ni = ni_right
        nj = nj_right
        dir = (dir + 3) % 4
        dir_cnt += 1
    # 벽이 있으면? 그대로니까 넘어감
    # else: pass

    # 방문할곳이 처음이면 가고 누가 방문했었으면 -1하고 종료. 뻉뺑이임
    # 아니면 visited를 전부 배열로 만들고 도착당시의 방향을 기록하고, not in 일때 추가 이미 있으면 종료 ( 하기싫음 ! )
    if visited[ni][nj] == 0:
        visited[ni][nj] = 1
        dir_cnt = 0
    else:
        ans = -1
        break

# for elem in arr:
#     print(*elem)
# print()
# for elem in visited:
#     print(*elem)
# print()
print(ans)