n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

# inputs를 돌면서 하나씩 조건을 체크해서 flag가 False일 때 break?

vertical_lines = [("V", x) for x in range(11)]
horizontal_lines = [("H", y) for y in range(11)]
all_lines = vertical_lines + horizontal_lines

flag = True

import itertools

for combo in itertools.combinations(all_lines, 3):
    all_covered = True

    for x, y in points:
        for line_type, coord in combo:
            if line_type == "V":
                if y == coord:
                    continue
            elif line_type == "H":
                if x == coord:
                    continue
            else:
                all_covered = False

    if all_covered == False:
        flag = False

if flag:
    print(1)
else:
    print(0)