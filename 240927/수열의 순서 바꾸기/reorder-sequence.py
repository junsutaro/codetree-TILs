n = int(input())
arr = list(map(int, input().split()))



# 1 7 3 4 5 6 2
# 1 2 3 4 5 6 7
ans = 0
# 1부터 순서대로 i+1이 어디있냐... 찾다가? 찾았다! 근데 i가 i+1보다 작으면 
# (5인덱스가 4보다 작으면) 그인덱스+1만큼 보내 

for i in range(n-1):
    # 4찾을차례 -> j가 돌면서 i위치가 4인곳을 찾음. 근데 걔(i)가 4보다 작잖아
    for j in range(1, n+1):
        if arr[i] == j:
            if i < arr[i]:
                ans = i + 1


print(ans)