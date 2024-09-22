# n명이 m개 치즈 먹음, 1개 상함
# a가 b라는 치즈 먹은 기록 d번
# 특정 사람이 언제 확실히 아팠는지 s번 (아팠던 사람 기록 안할수도 있음)
n, m, d, s = map(int, input().split())

# d줄에 걸쳐 p번째 사람이 m번째 치즈를 t초에 먹은 기록
eat_when = [tuple(map(int, input().split())) for _ in range(d)]

# s줄에 걸쳐 p가 t초에 확실히 아팠다고 함
sick_when = [tuple(map(int, input().split())) for _ in range(s)]

# Q. 아픈 사람 최대 몇명?
ans = 0
# 최대? 그럼 치즈별로 다 체크해서 말 되는놈 중 가장 많이 전염시킨놈 찾기

# 상한 치즈 판별하자
polluted_cheese = [False] * ( m + 1 )

for i in range(1, m+1):
    # i번째 치즈가 감염이라고 치자
    # i번째 사람이 t초에 먹었다는거 기록해야함
    infested_terran = [0] * ( n + 1 )
    for [ p, m, t ] in eat_when:
        if m == i and infested_terran[p] == 0:
            infested_terran[p] = t + 1 # 먹고 1초뒤부터 아픔
    
    # print(infested_terran)
    
    # p가 t초일 때 아팠대요. 감염된 후 아파야함, 감염안됐는데 아파도 False
    flag = True

    for [ p, t ] in sick_when:
        if infested_terran[p] > t or infested_terran[p] == 0:
            flag = False # 구라야!

    # 구라가 아니라면 상한치즈로 인정
    if flag == True:
        polluted_cheese[i] = True
        
        infested_cnt = sum(1 for x in infested_terran if x != 0 )
        ans = max(ans, infested_cnt)

# print(polluted_cheese) # [False, True, True, False, True]
print(ans)