n = int(input())

scores = [tuple(input().split()) for _ in range(n)]

sc_board = {}
sc_board['A'] = 0
sc_board['B'] = 0


honor = [0] * (n+1)

for idx in range(len(scores)):
    name, score = scores[idx]
    sc_board[name] += int(score)

    if sc_board['A'] - sc_board['B'] > 0:
        honor[idx + 1] = 1
    elif sc_board['A'] - sc_board['B'] < 0:
        honor[idx + 1] = -1


ans = 0
for i in range(0, n):
    if honor[i] != honor[i+1]:
        ans += 1

print(ans)