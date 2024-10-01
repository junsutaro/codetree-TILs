n, m = map(int, input().split())
bombs = [int(input()) for _ in range(n)]

explode_happen = True

while explode_happen:
    new_bombs = [] # m개 안넘는놈들 담아놓을거
    explode_happen = False
    temp = [] # 폭탄 실시간으로 m개 넘는지 체크하고 비울거
    
    for i in range(len(bombs)):
    # i = 0
    # while i < len(bombs):
        temp.append(bombs[i])

        if i == len(bombs) - 1 or bombs[i] != bombs[i+1]:

            if len(temp) >= m:
                explode_happen = True;
                temp = []
            else:
                new_bombs.append(temp)
                temp = []
        # i += 1

    bombs = []
    for elem in new_bombs:
        for bomb in elem:
            bombs.append(bomb)
    
print(len(bombs))
for bomb in bombs:
    print(bomb)