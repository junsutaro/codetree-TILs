n, m, r, c = map(int, input().split())
dirs = input().split()

r -= 1
c -= 1

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

moves = {'L': (0, -1), 'R': (0, 1), 'U': (-1, 0), 'D': (1, 0)}

i = r
j = c

for direction in dirs:
    di, dj = moves[direction]
    ni = i + di
    nj = j + dj

    if not ( 0 <= ni < n and 0 <= nj < n ):
        continue
    
    i, j = ni, nj

    rolling(direction)
    grid[i][j] = dice[5]



ans = sum(sum(elem) for elem in grid)

print(ans)