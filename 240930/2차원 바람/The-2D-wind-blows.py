n, m, q = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
winds = [list(map(int, input().split())) for _ in range(q)]

for elem in arr:
    print(*elem)

# 바람아~ 불어라~
for wind in winds:
    r1, c1, r2, c2 = wind
    origin_arr = arr[:]
    for i in range(r1, r2+1):
        for j in range(c1, c2+1):
            
            if i == r1: # 맨위
                if j == c1: # 맨왼쪽 맨위
                    continue
                arr[i][j] = origin_arr[i][j-1]
            
            if j == c2: # 맨오른쪽
                if i == r1: # 맨오른쪽 맨위
                    continue
                arr[i][j] = origin_arr[i-1][j]
            
            if i == r2: # 맨아래
                if j == c1: # 맨아래 맨오른쪽
                    continue
                arr[i][j] = origin_arr[i][j+1]
            
            if j == c1: # 맨왼쪽
                if i == r2: # 맨왼쪽 맨아래
                    continue
                arr[i][j] = origin_arr[i+1][j]

for elem in arr:
    print(*elem)