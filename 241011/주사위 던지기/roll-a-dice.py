n, m, r, c = map(int, input().split())
r -= 1
c -= 1

# m번 굴림
dirs = input().split()

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

i = r
j = c 

for direction in dirs:
    if direction == 'L':
        j -= 1
    elif direction == 'R':
        j += 1
    elif direction == 'D':
        i += 1
    else:
        i -= 1

    rolling(direction)
    grid[i][j] = dice[5]


ans = sum(sum(elem) for elem in grid)
print(ans)