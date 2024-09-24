arr = [list(map(int, input().strip())) for _ in range(3)]

unique_numbers = set()
for row in arr:
    for num in row:
        unique_numbers.add(num)

from itertools import combinations

teams = combinations(unique_numbers, 2)

# 이기면? -> 가로 세로 대각선 돌면서 모든 조합 만들어서 team이 그안에 있으면 됩니다

lines = []
for row in arr:
    lines.append(set(row))

for col_idx in range(3):
    vertical = set()
    for row_idx in range(3):
        vertical.add(arr[row_idx][col_idx])
    lines.append(vertical)

diag1 = set(arr[i][i] for i in range(3))
lines.append(diag1)

diag2 = set(arr[i][2-i] for i in range(3))
lines.append(diag2)


ans = 0

for team in teams:
    for line in lines:
        # print(team, line)
        if set(team) == line:
            ans +=1
            break;
print(ans)