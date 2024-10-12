tc = int(input())
n, m = map(int, input().split())
balls = [list(input().split()) for _ in range(m)]

# tc = 1
# n, m = 4, 4
# balls = [
#     [1, 1, 'D'],
#     [1, 2, 'D'],
#     [1, 3, 'D'],
#     [1, 4, 'D'],
# ]

for i in range(m):
    for j in range(2):
        balls[i][j] = int(balls[i][j]) - 1

moves = {
    'L': (0, -1),
    'R': (0, 1),
    'U': (-1, 0),
    'D': (1, 0),
}

from collections import Counter
for _ in range(tc):
    for _ in range(2*n+1):
        for ball in balls:
            di, dj = moves[ball[2]]

            ball[0] = ball[0] + di
            ball[1] = ball[1] + dj
            
            # 방향전환
            # 근데 1초 기다려야한다면? 한칸 다시 땡겨오면 됨
            if ball[0] == -1:
                ball[2] = 'D'
                ball[0] = 0
            elif ball[0] == n:
                ball[2] = 'U'
                ball[0] = n-1
            elif ball[1] == -1:
                ball[2] = 'R'
                ball[1] = 0
            elif ball[1] == n:
                ball[2] = 'L'
                ball[1] = n-1

        ball_tuples = [(ball[0], ball[1]) for ball in balls]
        counter = Counter(ball_tuples)
        balls = [ball for ball in balls if counter[(ball[0], ball[1])] == 1]

    print(len(balls))