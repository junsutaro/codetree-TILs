arr = [list(map(int, input().strip())) for _ in range(3)]

# 등장하는 숫자들 안에서만 보면 됨
unique_numbers = set()
for elem in arr:
    for number in elem:
        unique_numbers.add(number)

# 그 숫자들로 2개씩 묶는 모든 팀 경우의 수
import itertools
all_teams = list(itertools.combinations(unique_numbers, 2))

# 가로세로대각선 모든 경우의 집합 (을 바로 set으로 넣어)
all_case = []
for row in arr:
    all_case.append(set(row))

for i in range(3):
    temp = set()
    for j in range(3):
        temp.add(arr[j][i])
    all_case.append(temp)

diag1 = set()
diag2 = set()
for i in range(3):
    diag1.add(arr[i][i])
all_case.append(diag1)

for i in range(3):
    diag2.add(arr[i][2-i])
all_case.append(diag2)

# all_teams 돌면서 all_case에 있는지 체크
ans = 0

for team in all_teams:
    for case in all_case:
        if set(team) == case:
            ans += 1
            break

print(ans)