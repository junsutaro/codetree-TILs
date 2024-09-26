n = int(input())
seats = list(map(int, input()))

# 1이 있는 좌석과 0이 있는 좌석을 구분해서 리스트에 저장
occs = [i for i, seat in enumerate(seats) if seat == 1]
empties = [i for i, seat in enumerate(seats) if seat == 0]

ans = 0

# 비어있는 좌석에 사람을 하나씩 넣어서 계산
for empty in empties:
    new_occs = occs[:]  # 기존 좌석 리스트 복사
    new_occs.append(empty)
    new_occs.sort()  # 정렬해서 거리 계산을 하기 위한 준비

    # 최소 거리를 구함
    dist = float('inf')
    for i in range(1, len(new_occs)):
        dist = min(dist, new_occs[i] - new_occs[i-1])
    
    # 최대 최소 거리를 찾음
    ans = max(ans, dist)

# 첫 좌석이 비어있을 때, 마지막 좌석이 비어있을 때 따로 처리
if 0 in empties:
    ans = max(ans, occs[0])  # 첫 번째 사람이 0번째 자리에 앉았을 때의 거리

if n-1 in empties:
    ans = max(ans, n-1 - occs[-1])  # 마지막 사람이 n-1 자리에 앉았을 때의 거리

print(ans)