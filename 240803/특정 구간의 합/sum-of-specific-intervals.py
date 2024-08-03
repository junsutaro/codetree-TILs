n, m = map(int,input().split())
listA = list(map(int, input().split()))

for _ in range(m):
    a1, a2 = map(int, input().split())

    sum = 0
    for i in range(a1 - 1, a2):
        sum += listA[i]
    
    print(sum)