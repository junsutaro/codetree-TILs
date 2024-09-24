import itertools

# 입력 받기
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

# 가능한 모든 수직선과 수평선 생성
vertical_lines = [("V", x) for x in range(11)]    # 수직선: x=0 ~ x=10
horizontal_lines = [("H", y) for y in range(11)]  # 수평선: y=0 ~ y=10
all_lines = vertical_lines + horizontal_lines       # 총 22개

# 모든 3개 직선 조합 탐색
found = False  # 조건을 만족하는 조합이 있는지 여부

for combo in itertools.combinations(all_lines, 3):
    # 각 조합에 대해 모든 점이 적어도 하나의 직선 위에 있는지 확인
    all_covered = True
    for (px, py) in points:
        covered = False
        for (line_type, coord) in combo:
            if line_type == "V" and px == coord:
                covered = True
                break
            elif line_type == "H" and py == coord:
                covered = True
                break
        if not covered:
            all_covered = False
            break  # 현재 조합에서는 모든 점을 커버하지 못하므로 다음 조합으로 이동
    if all_covered:
        found = True
        break  # 조건을 만족하는 조합을 찾았으므로 탐색 종료

# 결과 출력
print(1 if found else 0)