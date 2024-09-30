def largest_rectangle_in_histogram(heights):
    stack = []
    max_area = 0
    heights.append(0)  # 마지막 처리용으로 0을 추가합니다.
    
    for i in range(len(heights)):
        while stack and heights[stack[-1]] >= heights[i]:
            h = heights[stack.pop()]
            w = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * w)
        stack.append(i)
    
    heights.pop()  # 다시 제거
    return max_area

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# 높이 누적 배열
heights = [0] * m
max_rectangle = 0

# 각 행을 차례대로 처리
for i in range(n):
    for j in range(m):
        # 양수라면 높이를 누적, 아니면 0으로 리셋
        if arr[i][j] > 0:
            heights[j] += 1
        else:
            heights[j] = 0
    
    # 현재 행의 높이 배열을 히스토그램으로 간주하고 최대 직사각형 계산
    max_rectangle = max(max_rectangle, largest_rectangle_in_histogram(heights))

if max_rectangle == 0:
    print(-1)
else:
    print(max_rectangle)