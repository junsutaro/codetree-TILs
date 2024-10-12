n, m, t, k = map(int, input().split())
marbles = [list(input().split()) for _ in range(m)]
grid = [[0] * n for _ in range(n)]

dir_to_num = {'L' : 0, 'R' : 3, 'U' : 2, 'D' : 1}

for marble in marbles:
    marble[0] = int(marble[0]) - 1
    marble[1] = int(marble[1]) - 1
    marble[2] = dir_to_num[marble[2]]
    marble[3] = int(marble[3])

    grid[marble[0]][marble[1]] += 1

di = [0, 1, -1, 0]
dj = [-1, 0, 0, 1]

# for elem in grid:
#     print(*elem)

def move(marble):

    i, j, vel = marble[0], marble[1], marble[3]
    grid[i][j] -= 1

    dir = marble[2]
    ni = -1
    nj = -1
    for _ in range(vel):
        ni = i + di[dir]
        nj = j + dj[dir]
        if not ( 0 <= ni < n and 0 <= nj < n ):
            dir = 3 - dir
            if ni < 0:
                ni = 0 - ni
            elif nj < 0:
                nj = 0 - nj
            elif ni >= n:
                ni = abs(ni + 2 - n)
            elif nj >= n:
                nj = abs(nj + 2 - n)
        i = ni
        j = nj


    marble[0] = ni
    marble[1] = nj
    marble[2] = dir

    grid[ni][nj] += 1


def find_winner(pos):
    i, j = pos

    new_marbles = [marble for marble in marbles if marble[0] == i and marble[1] == j]
    
    winner = new_marbles[0]

    for marble in new_marbles:
        if marble[3] > winner[3]:
            winner = marble
    return winner

for _ in range(t):
    for marble in marbles:
        move(marble)

    # print()
    # for elem in grid:
    #     print(*elem)    

    new_marbles = []
    for i in range(n):
        for j in range(n):
            if grid[i][j] >= 1:
                winner = find_winner([i, j])
                new_marbles.append(winner)

    marbles = new_marbles

    # for elem in grid:
    #     print(*elem)    
print(len(marbles))