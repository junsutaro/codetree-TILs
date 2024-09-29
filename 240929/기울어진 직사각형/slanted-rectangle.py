n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# 방향 설정: 1(↙) -> 2(↘) -> 3(↖) -> 4(↗)
directions = [(1, -1), (1, 1), (-1, 1), (-1, -1)]

def marummo(i, j, dir, temp_sum, steps):
    global ans
    if dir == 4:
        # 네 방향 모두 이동했고, 시작점으로 돌아왔다면
        if i == si and j == sj and steps >= 4:
            ans = max(ans, temp_sum)
        return

    ni = i + directions[dir][0]
    nj = j + directions[dir][1]

    if 0 <= ni < n and 0 <= nj < n:
        # 현재 방향으로 계속 가는 경우
        marummo(ni, nj, dir, temp_sum + arr[ni][nj], steps + 1)
        # 방향을 꺾는 경우
        marummo(ni, nj, dir + 1, temp_sum + arr[ni][nj], steps + 1)

ans = 0

# 모든 지점을 시작점으로 최대 합 계산
for si in range(n):
    for sj in range(n):
        marummo(si, sj, 0, arr[si][sj], 0)

print(ans)