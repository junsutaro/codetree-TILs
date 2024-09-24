n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

# inputs를 돌면서 하나씩 조건을 체크해서 flag가 False일 때 break?

vertical_lines = [("V", x) for x in range(11)]
horizontal_lines = [("H", y) for y in range(11)]
all_lines = vertical_lines + horizontal_lines

flag = False

import itertools

for combo in itertools.combinations(all_lines, 3):
    all_covered = True

    for x, y in points:
        # 다 돌았는데 inner_flag가 True이면? flag가 True가 된다~
        covered = False

        for line_type, coord in combo:

            if line_type == "V" and x == coord:
                covered = True  
                break;
            elif line_type == "H" and y == coord:
                covered = True  
                break;
        if not covered:
            all_covered = False
            break;
    if all_covered:
        flag = True

if flag:
    print(1)
else:
    print(0)