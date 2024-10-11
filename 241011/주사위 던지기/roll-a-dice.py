n, m, r, c = map(int, input().split())
dirs = input().split()

# [n, m, r, c] = [4, 4, 2, 3]
# dirs = ['L', 'L', 'L', 'L']

r -= 1
c -= 1

# m번 굴림

# 주사위 펼치기
#      위 북 서 남 동 아래
dice = [1, 5, 4, 2, 3, 6]

transforms = {
    'L': [4, 1, 0, 3, 5, 2],
    'R': [2, 1, 5, 3, 0, 4],
    'U': [3, 0, 2, 5, 4, 1],
    'D': [1, 5, 2, 0, 4, 3],
}


def rolling(direction):
    global dice
    dice = [dice[i] for i in transforms[direction]]

grid = [[0] * n for _ in range(n)]
grid[r][c] = 6

i = r
j = c 

for direction in dirs:
    if direction == 'L':
        if j - 1 < 0:
            continue
        j -= 1
    elif direction == 'R':
        if j + 1 >= n:
            continue
        j += 1
    elif direction == 'D':
        if i + 1 >= n:
            continue
        i += 1
    else:
        if i - 1 < 0:
            continue
        i -= 1

    rolling(direction)
    grid[i][j] = dice[5]


# for elem in grid:
#     print(*elem)

ans = sum(sum(elem) for elem in grid)
print(ans)