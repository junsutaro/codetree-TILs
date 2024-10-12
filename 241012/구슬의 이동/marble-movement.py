# n, m, t, k = map(int, input().split())
# marbles = [list(input().split()) for _ in range(m)]

n, m, t, k = 4, 3, 1, 2
marbles = [
    ['1', '4', 'D', '1'],
    ['2', '1', 'R', '3'],
    ['3', '4', 'U', '1'],
]

grid = [[0] * n for _ in range(n)]

dir_to_num = {'L' : 0, 'R' : 3, 'U' : 2, 'D' : 1}

for marble in marbles:
    marble[0] = int(marble[0]) - 1
    marble[1] = int(marble[1]) - 1
    marble[2] = dir_to_num[marble[2]]
    marble[3] = int(marble[3])
    grid[marble[0]][marble[1]] += 1


print()
for elem in grid:
    print(*elem)

di = [0, 1, -1, 0]
dj = [-1, 0, 0, 1]


def move(marble):
    
    i, j, dir, vel = marble
    ni = -1
    nj = -1

    for _ in range(vel):

        ni = i + di[dir]
        nj = j + dj[dir]

        if not ( 0 <= ni < n and 0 <= nj < n ):
            dir = 3 - dir

            if ni == -1:
                ni = 1
            elif nj == -1:
                nj = 1
            elif ni == n:
                ni = n-2
            elif nj == n:
                nj = n-2
        i = ni
        j = nj

        marble[0], marble[1], marble[2] = ni, nj, dir

    grid[ni][nj] += 1

def find_winners(i, j):
    
    winners = [marble for marble in marbles if marble[0] == i and marble[1] == j]
    if grid[i][j] <= k:
        return winners
    else:
        winners.sort(key = lambda x: x[3], reverse=True)
        return winners[:k]


for _ in range(2):
    for marble in marbles:
        grid[marble[0]][marble[1]] -= 1
        move(marble)
    
    print()
    for elem in grid:
        print(*elem)
    
    new_marbles = []
    for i in range(n):
        for j in range(n):
            if grid[i][j]:
                temp = find_winners(i, j)
                new_marbles.extend(temp)

    marbles = new_marbles