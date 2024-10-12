n, m = map(int, input().split())

grid = [
    [[] for _ in range(n)]
    for _ in range(n)
]

for i in range(n):
    given_row = list(map(int, input().split()))
    for j, num in enumerate(given_row):
        grid[i][j].append(num)

moves = list(map(int, input().split()))


def find_num(num):
    for i in range(n):
        for j in range(n):
            if num in grid[i][j]:
                return [i, j]
    return None  # num이 grid에 없을 때 None 반환

dis = [-1, -1, -1, 0, 1, 1, 1, 0]
djs = [-1, 0, 1, 1, 1, 0, -1, -1]

def find_target(pos):
    temp_max = -1
    [i, j] = pos
    mi, mj = -1, -1

    for di, dj in zip(dis, djs):
        ni = i + di
        nj = j + dj

        if not (0 <= ni < n and 0 <= nj < n):
            continue
        
        if grid[ni][nj]:  # 빈 리스트는 False로 간주됨
            if max(grid[ni][nj]) > temp_max:
                mi, mj = ni, nj
                temp_max = max(grid[ni][nj])
                
    if mi == -1 and mj == -1:
        return None  # 이동할 위치가 없을 때 None 반환
    return [mi, mj]

def move(pos, next_pos, move_num):
    [i, j] = pos
    [ni, nj] = next_pos

    to_move = False

    for num in grid[i][j]:
        if num == move_num:
            to_move = True
        if to_move:
            grid[ni][nj].append(num)

    while grid[i][j][-1] != move_num:
        grid[i][j].pop()
    
    grid[i][j].pop()

for move_num in moves:
    pos = find_num(move_num)
    if pos is None:
        continue  # move_num이 grid에 없으면 다음으로 넘어감
    next_pos = find_target(pos)
    if next_pos is not None and pos != next_pos:
        move(pos, next_pos, move_num)

for row in grid:
    for elem in row:
        if elem:
            print(*elem[::-1])
        else:
            print('None')