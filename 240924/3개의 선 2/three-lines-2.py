n = int(input())
inputs = [tuple(map(int, input().split())) for _ in range(n)]

# inputs를 돌면서 하나씩 조건을 체크해서 flag가 False일 때 break?

ans = 0

x_lst = []
y_lst = []

for i in range(n-1):
    for j in range(i+1, n):
        x1, y1 = inputs[i]
        x2, y2 = inputs[j]

        if x1 == x2 and x1 not in x_lst:
            x_lst.append(x1)

        elif y1 == y2 and y1 not in y_lst:
            y_lst.append(y1) 
    
# print(x_lst)
# print(y_lst)

if len(x_lst) + len(y_lst) <= 3:
    ans = 1

print(ans)