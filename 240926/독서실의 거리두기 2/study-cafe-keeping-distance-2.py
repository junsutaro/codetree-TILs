n = int(input())
seats = list(map(int, input()))

# 1이 있는 좌석의 위치를 저장
occs = [i for i, seat in enumerate(seats) if seat == 1]
ans = 0

for i in range(n):
    if seats[i] == 0:
        new_occs = occs[:]
        new_occs.append(i)
        new_occs.sort() 

        dist = float('inf')
        for j in range(1, len(new_occs)):
            dist = min(dist, new_occs[j] - new_occs[j - 1])
        
        ans = max(ans, dist)

print(ans)