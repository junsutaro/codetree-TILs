# 10x10 크기의 배열 입력 받기
arr = [list(input()) for _ in range(10)]

# 좌표 저장 변수
L, R, B = None, None, None

# L, R, B의 좌표 찾기
for i in range(10):
    for j in range(10):
        if arr[i][j] == 'L':
            L = [i, j]
        elif arr[i][j] == 'R':
            R = [i, j]
        elif arr[i][j] == 'B':
            B = [i, j]

# 기본 거리 계산 (맨해튼 거리)
ans = abs(B[1] - L[1]) + abs(B[0] - L[0])

# 일직선 상에 있을 때 R이 사이에 있는지 체크
if L[0] == B[0] == R[0]:  # 같은 행
    if min(L[1], B[1]) < R[1] < max(L[1], B[1]):
        ans += 2  # R을 우회하는 거리 추가
elif L[1] == B[1] == R[1]:  # 같은 열
    if min(L[0], B[0]) < R[0] < max(L[0], B[0]):
        ans += 2  # R을 우회하는 거리 추가

print(ans)