n = int(input())
arr = list(map(int, input().split()))

# 배열을 정렬
arr.sort()

# 각 그룹 내 두 수의 차이 중 최솟값이 최대가 되도록 설정
ans = float('inf')
for i in range(0, 2 * n, 2):
    # 인접한 두 수끼리 묶어서 차이를 계산
    temp = arr[i + 1] - arr[i]
    ans = min(temp, ans)

print(ans)