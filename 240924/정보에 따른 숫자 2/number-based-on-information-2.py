# T개 알파벳, a 이상 b 이하 구간
T, a, b = map(int, input().split())
# T개 줄에 걸쳐 각 알파벳 값 c, 놓인 위치 x
alphas = [tuple(input().split()) for _ in range(T)]


# arr에서 현재 i(temp)와 가장 가까운 수를 찾아서 거리 return 
# def find_nearest(arr, temp):
#     dist = 10000
#     for elem in arr:
#         dist = min(dist, abs(elem - temp))
    
#     return dist

import bisect
def find_nearest(arr, temp):
    index = bisect.bisect_left(arr ,temp)

    if index == 0:
        return abs(arr[0] - temp)
    elif index == len(arr):
        return abs(arr[-1] - temp)
    
    before = arr[index - 1]
    after = arr[index]

    return min( abs(before - temp), abs(after - temp) )

# 특정위치 k에서 S까지 거리가 N보다 가까우면 특별한 위치

N_pos = []
S_pos = []

for alpha in alphas:
    if alpha[0] == 'S':
        S_pos.append(int(alpha[1]))
    if alpha[0] == 'N':
        N_pos.append(int(alpha[1]))

S_pos.sort()
N_pos.sort()

ans = 0;

for i in range(a, b+1):
    S_nearest = find_nearest(S_pos, i)
    N_nearest = find_nearest(N_pos, i)
    if S_nearest <= N_nearest:
        ans += 1


print(ans)