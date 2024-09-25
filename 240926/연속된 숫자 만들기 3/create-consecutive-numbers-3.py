lst = list(map(int, input().split()))

cnt = 0

if lst[1]-lst[0] > lst[2]-lst[1]:
    print(lst[1] - lst[0] - 1)
else:
    print(lst[2] - lst[1] - 1)