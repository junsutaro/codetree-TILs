n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# 주어진 좌표 (i, j)를 기준으로 마름모 범위 내의 금 개수를 반환하는 함수
def return_mine(i, j):
    max_cnt = 0
    for K in range(n):
        cnt = 0
        # K 크기의 마름모 범위 내에서 금을 계산
        for ni in range(i - K, i + K + 1):
            for nj in range(j - K, j + K + 1):
                # 마름모 모양을 유지하며 격자를 벗어나지 않도록 조건 처리
                if 0 <= ni < n and 0 <= nj < n:
                    if abs(ni - i) + abs(nj - j) <= K and arr[ni][nj] == 1:
                        cnt += 1
        
        # 채굴 비용과 수익 비교
        cost = K * K + (K + 1) * (K + 1)
        if m * cnt >= cost:  # 손해를 보지 않는다면
            max_cnt = max(max_cnt, cnt)
    
    return max_cnt

# 정답을 저장할 변수
ans = 0

# 모든 좌표에서 마름모 범위 내의 최대 금 개수를 확인
for i in range(n):
    for j in range(n):
        ans = max(ans, return_mine(i, j))

print(ans)