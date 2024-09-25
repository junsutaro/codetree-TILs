lst = list(map(int, input().split()))

lst.sort()

cnt = 0

while(True):

    if lst[1]-lst[0] > lst[2]-lst[1]:
        lst[2] = lst[1] - 1
    else:
        lst[0] = lst[1] + 1

    cnt += 1
    
    lst.sort()
    # print(lst)

    if lst[2] - lst[1] == 1 and lst[1] - lst[0] == 1:
        print(cnt)
        break